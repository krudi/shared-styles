import type { Meta, StoryObj } from '@storybook/html-vite';

import type { ContainerArgs } from './container.types';

const meta = {
    title: 'Layout/Container',
    tags: ['autodocs'],
    render: (): string => `
        <h2 class="h4 mt-0">Container</h2>
        <div class="container">
            <p class="m-0 text-gray"><code>.container</code> recenters content and constrains it to the design width.</p>
            <p class="mt-2 mb-0 text-gray">Use the container to keep text blocks and components aligned to the layout grid.</p>
        </div>
    `,
    parameters: {
        docs: {
            description: {
                component: 'Container constraints for responsive page composition.',
            },
        },
    },
} satisfies Meta<ContainerArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Use <code>.container</code> to center content and cap the design width across breakpoints.',
            },
        },
    },
};

export const Playground: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Use the container utility when you need consistent page-width alignment.',
            },
        },
    },
};
