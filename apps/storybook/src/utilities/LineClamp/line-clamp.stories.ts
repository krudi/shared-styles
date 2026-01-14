import type { Meta, StoryObj } from '@storybook/html-vite';

import type { LineClampArgs } from './line-clamp.types';

const meta = {
    title: 'Utilities/Line Clamp',
    tags: ['autodocs'],
    render: () => `
        <h2 class="h4 mt-0">Line clamp</h2>
        <p class="line-clamp-2 m-0 text-gray">This paragraph uses <code>.line-clamp-2</code> to demonstrate truncation. The utility keeps multi-line text tidy without extra markup or JavaScript.</p>
    `,
    parameters: {
        docs: {
            description: {
                component: 'Truncation helpers for multi-line text in cards and lists.',
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

export const Playground: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Line clamp helpers are great for previews and summaries.',
            },
        },
    },
};
