import type { Meta, StoryObj } from '@storybook/html-vite';

const meta = {
    title: 'Components/List',
    render: ({ items }: ListArgs): string => `
        <ul class="unordered-list" role="list">
            ${items.map((item) => `<li>${item}</li>`).join('')}
        </ul>
    `,
    args: {
        items: [
            'Consistent zero margins via .unordered-list.',
            'Use regular list semantics for accessibility.',
            'Apply utilities for spacing and colour as needed.',
        ],
    },
    argTypes: {
        items: { control: 'object' },
    },
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: `List — purpose-driven component from the design system. Use this component for its primary role in the UI, follow the system tokens for spacing and colour, and ensure a clear accessible name is provided. Follow keyboard and screen-reader best practices when the component is interactive. Example markup: <code>&lt;ul&gt;…&lt;/ul&gt;</code>.

Design tokens: see the Tokens story under the theme section (theme/Tokens) for reference to CSS variables and token names.`,
            },
        },
    },
} satisfies Meta<ListArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Canonical unordered list example.',
            },
        },
    },
};
