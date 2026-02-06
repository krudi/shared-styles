import type { Meta, StoryObj } from '@storybook/html-vite';

import type { TextColorsArgs } from './text-colors.types';

const meta = {
    title: 'Utilities/Text Colors',
    tags: ['autodocs'],
    render: () => `
        <h2 class="h4 mt-0">Text colors</h2>
        ${[
            { className: 'text-secondary', label: '.text-secondary' },
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
                component: 'Text color helpers for accents and hierarchy.',
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
                story: 'Apply accent hues for emphasis without altering typography styles.',
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
