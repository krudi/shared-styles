import type { Meta, StoryObj } from '@storybook/html-vite';

const meta = {
    title: 'Components/Blockquote',
    render: (): string => `
        <blockquote>
            <p>
                Shared styles work best when the default markup is already predictable, then tokens can shape the
                brand language without rebuilding each component.
            </p>
        </blockquote>
    `,
    parameters: {
        layout: 'padded',
        controls: { disable: true },
        docs: {
            description: {
                component: `Blockquote — purpose-driven component from the design system. Use this component for its primary role in the UI, follow the system tokens for spacing and colour, and ensure a clear accessible name is provided. Follow keyboard and screen-reader best practices when the component is interactive.

Design tokens are documented below.`,
            },
        },
    },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
