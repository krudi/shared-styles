import type { Meta, StoryObj } from '@storybook/html-vite';

import type { TextDecorationArgs } from './text-decoration.types';

const meta = {
    title: 'Utilities/Text Decoration',
    tags: ['autodocs'],
    render: () => `
        <h2 class="h4 mt-0">Text decoration</h2>
        ${[
            { className: 'text-decoration-none', label: '.text-decoration-none' },
            { className: 'text-decoration-underline', label: '.text-decoration-underline' },
            { className: 'text-decoration-line-through', label: '.text-decoration-line-through' },
            { className: 'text-decoration-wavy', label: '.text-decoration-wavy' },
        ]
            .map(
                (utility) => `
            <p class="${utility.className} m-0">Utility sample ${utility.label} on inline text.</p>
        `
            )
            .join('')}
    `,
    parameters: {
        docs: {
            description: {
                component: 'Decoration helpers for text emphasis and inline styling.',
            },
        },
    },
} satisfies Meta<TextDecorationArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Decoration helpers are ideal for inline emphasis without custom CSS.',
            },
        },
    },
};

export const Playground: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Use decoration utilities to refine inline emphasis states.',
            },
        },
    },
};
