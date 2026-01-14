import type { Meta, StoryObj } from '@storybook/html-vite';

import type { PaddingArgs } from './padding.types';

const meta = {
    title: 'Utilities/Padding',
    tags: ['autodocs'],
    render: (): string => `
        <h2 class="h4 mt-0">Padding helpers</h2>
        <div class="p-1 bg-white-100 mb-1">.p-1</div>
        <div class="p-2 bg-white-100 mb-1">.p-2</div>
        <div class="p-3 bg-white-100 mb-1">.p-3</div>
        <div class="p-4 bg-white-100">.p-4</div>
        <p class="mt-2 text-gray mb-0">Padding utilities map directly to the spacing scale for consistent spacing.</p>
    `,
    parameters: {
        docs: {
            description: {
                component: 'Padding helpers aligned to the spacing scale.',
            },
        },
    },
} satisfies Meta<PaddingArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Padding helpers for consistent interior spacing.',
            },
        },
    },
};

export const Playground: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Use padding utilities to adjust internal spacing on containers.',
            },
        },
    },
};
