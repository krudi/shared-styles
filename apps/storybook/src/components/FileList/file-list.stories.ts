import type { Meta, StoryObj } from '@storybook/html-vite';

import type { FileListArgs } from './file-list.types';

const icon = `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
        <path d="M14 3v5h5" />
    </svg>
`;

const meta = {
    title: 'Components/File List',
    render: ({ ariaLabel, showIcons, showMeta, files }: FileListArgs): string => `
        <ul class="file-list" aria-label="${ariaLabel}">
            ${files
                .map(
                    (file) => `
                        <li class="file-list-item">
                            ${showIcons ? `<span class="file-list-item-icon">${icon}</span>` : ''}
                            <div class="file-list-item-body">
                                <a class="file-list-item-link" href="${file.href}" download>${file.name}</a>
                                ${
                                    showMeta
                                        ? `
                                            <p class="file-list-item-meta">
                                                <span>${file.type}</span>
                                                <span>${file.size}</span>
                                                ${file.description ? `<span>${file.description}</span>` : ''}
                                            </p>
                                        `
                                        : ''
                                }
                            </div>
                        </li>
                    `
                )
                .join('')}
        </ul>
    `,
    args: {
        ariaLabel: 'Downloads',
        showIcons: true,
        showMeta: true,
        files: [
            {
                href: '#application-form.pdf',
                name: 'Parking permit application form',
                type: 'PDF',
                size: '240 KB',
                description: 'Print, sign and return by post or in person.',
            },
            {
                href: '#fee-schedule.xlsx',
                name: 'Fee schedule 2026',
                type: 'XLSX',
                size: '18 KB',
                description: '',
            },
            {
                href: '#privacy-notice.pdf',
                name: 'Privacy notice for permit holders',
                type: 'PDF',
                size: '96 KB',
                description: 'How your data is processed.',
            },
        ],
    },
    argTypes: {
        ariaLabel: { control: 'text' },
        showIcons: { control: 'boolean' },
        showMeta: { control: 'boolean' },
        files: { control: 'object' },
    },
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: `File List — a list of downloadable documents. Each item shows the document title as the link text, with file type, size and an optional description so people know what they will get before they open it. Keep icons decorative (\`aria-hidden\`) and put the format in text; never rely on the icon alone.

Design tokens are documented below.`,
            },
        },
    },
} satisfies Meta<FileListArgs>;

export default meta;

type Story = StoryObj<FileListArgs>;

export const Default: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Icons, type, size and description.',
            },
        },
    },
};

export const Compact: Story = {
    args: { showIcons: false, showMeta: false },
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Link text only.',
            },
        },
    },
};
