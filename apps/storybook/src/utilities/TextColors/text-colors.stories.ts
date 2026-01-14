import type { Meta, StoryObj } from '@storybook/html-vite';

import type { TextColorsArgs } from './text-colors.types';

const meta = {
    title: 'Utilities/Text Colors',
    tags: ['autodocs'],
    render: () => `
        <h2 class="h4 mt-0">Text colors</h2>
        ${[
            { className: 'text-primary', label: '.text-primary' },
            { className: 'text-secondary', label: '.text-secondary' },
            { className: 'text-success', label: '.text-success' },
            { className: 'text-info', label: '.text-info' },
            { className: 'text-warning', label: '.text-warning' },
            { className: 'text-danger', label: '.text-danger' },
            { className: 'text-gray', label: '.text-gray' },
        ]
            .map(
                (utility) => `
            <p class="${utility.className} m-0">${utility.label} — keep semantic markup and apply the hue class as needed.</p>
        `
            )
            .join('')}
    `,
    parameters: {
        docs: {
            description: {
                component: 'Text color helpers for semantic accents and status messaging.',
            },
        },
    },
} satisfies Meta<TextColorsArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Apply semantic hues for status and emphasis without altering typography styles.',
            },
        },
    },
};

export const Playground: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Text color utilities pair with semantic HTML for accessible emphasis.',
            },
        },
    },
};
