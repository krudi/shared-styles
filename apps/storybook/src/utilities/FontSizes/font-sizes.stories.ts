import type { Meta, StoryObj } from '@storybook/html-vite';

const meta = {
    title: 'Utilities/Font Sizes',
    render: () => `
        <h2 class="h4 mt-0">Font sizing</h2>
        ${[
            { className: 'text-xs', label: '.text-xs' },
            { className: 'text-sm', label: '.text-sm' },
            { className: 'text-md', label: '.text-md' },
            { className: 'text-lg', label: '.text-lg' },
            { className: 'text-xl', label: '.text-xl' },
        ]
            .map(
                (utility) => `
            <p class="${utility.className} m-0">Scale text with ${utility.label} while inheriting the base font family and weight.</p>
        `
            )
            .join('')}
    `,
    parameters: {
        docs: {
            description: {
                component: `Font Sizes — purpose-driven component from the design system. Use this component for its primary role in the UI, follow the system tokens for spacing and colour, and ensure a clear accessible name is provided. Follow keyboard and screen-reader best practices when the component is interactive.

Design tokens: see the Tokens story under the theme section (theme/Tokens) for reference to CSS variables and token names.`,
            },
        },
    },
} satisfies Meta<FontSizesArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Use these scale helpers for quick typography adjustments while keeping the base font family.',
            },
        },
    },
};
