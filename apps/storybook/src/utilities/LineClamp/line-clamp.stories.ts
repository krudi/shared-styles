import type { Meta, StoryObj } from '@storybook/html-vite';

const meta = {
    title: 'Utilities/Line Clamp',
    render: () => `
        <h2 class="h4 mt-0">Line clamp</h2>
        <p class="line-clamp-2 m-0 text-gray">This paragraph uses <code>.line-clamp-2</code> to demonstrate truncation. The utility keeps multi-line text tidy without extra markup or JavaScript.</p>
    `,
    parameters: {
        docs: {
            description: {
                component: `Line Clamp — purpose-driven component from the design system. Use this component for its primary role in the UI, follow the system tokens for spacing and colour, and ensure a clear accessible name is provided. Follow keyboard and screen-reader best practices when the component is interactive.

Design tokens: see the Tokens story under the theme section (theme/Tokens) for reference to CSS variables and token names.`,
            },
        },
    },
} satisfies Meta<LineClampArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Clamp utilities truncate multi-line text to keep cards and lists tidy.',
            },
        },
    },
};
