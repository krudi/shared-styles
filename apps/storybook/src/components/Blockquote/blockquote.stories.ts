import type { Meta, StoryObj } from '@storybook/html-vite';

const meta = {
    title: 'Components/Blockquote',
    tags: ['autodocs'],
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
                component:
                    'Editorial blockquote styling for semantic <code>&lt;blockquote&gt;</code> content. The default treatment uses the shared accent color and quote spacing tokens.',
            },
        },
    },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
