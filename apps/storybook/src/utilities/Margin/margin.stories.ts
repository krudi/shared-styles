import type { Meta, StoryObj } from '@storybook/html-vite';

import type { MarginArgs } from './margin.types';

const meta = {
    title: 'Utilities/Margin',
    tags: ['autodocs'],
    render: (): string => `
        <h2 class="h4 mt-0">Margin helpers</h2>
        <div class="p-2 bg-white-100">
            <div class="mt-3 p-2 bg-white">.mt-3</div>
            <div class="mb-3 p-2 bg-white">.mb-3</div>
            <div class="mx-auto p-2 bg-white">.mx-auto</div>
        </div>
        <p class="mt-2 text-gray mb-0">Margin utilities map to the spacing scale for predictable layout adjustments.</p>
    `,
    parameters: {
        docs: {
            description: {
                component: 'Margin helpers aligned to the spacing scale.',
            },
        },
    },
} satisfies Meta<MarginArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Margin helpers for spacing between components and sections.',
            },
        },
    },
};

export const Playground: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Use margin utilities to manage vertical and horizontal rhythm.',
            },
        },
    },
};
