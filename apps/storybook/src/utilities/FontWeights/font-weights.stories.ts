import type { Meta, StoryObj } from '@storybook/html-vite';

const meta = {
    title: 'Utilities/Font Weights',
    render: () => `
        <h2 class="h4 mt-0">Font weights</h2>
        ${[
            { className: 'fw-300', label: '.fw-300' },
            { className: 'fw-400', label: '.fw-400' },
            { className: 'fw-500', label: '.fw-500' },
            { className: 'fw-600', label: '.fw-600' },
            { className: 'fw-700', label: '.fw-700' },
        ]
            .map(
                (utility) => `
            <p class="${utility.className} m-0">Weight sample with ${utility.label} for emphasis and hierarchy.</p>
        `
            )
            .join('')}
    `,
    parameters: {
        docs: {
            description: {
                component: `Font Weights — purpose-driven component from the design system. Use this component for its primary role in the UI, follow the system tokens for spacing and colour, and ensure a clear accessible name is provided. Follow keyboard and screen-reader best practices when the component is interactive.

Design tokens: see the Tokens story under the theme section (theme/Tokens) for reference to CSS variables and token names.`,
            },
        },
    },
} satisfies Meta<FontWeightsArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Pair font weight utilities with semantic headings to fine-tune emphasis.',
            },
        },
    },
};
