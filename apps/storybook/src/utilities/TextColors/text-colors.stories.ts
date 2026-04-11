import type { Meta, StoryObj } from '@storybook/html-vite';

import type { TextColorsArgs } from './text-colors.types';

const meta = {
    title: 'Utilities/Text Colors',
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
                component: `Text Colors — purpose-driven component from the design system. Use this component for its primary role in the UI, follow the system tokens for spacing and colour, and ensure a clear accessible name is provided. Follow keyboard and screen-reader best practices when the component is interactive.

Design tokens: see the Tokens story under the theme section (theme/Tokens) for reference to CSS variables and token names.`,
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
