import type { Meta, StoryObj } from '@storybook/html-vite';

import type { ContainerArgs } from './container.types';

const meta = {
    title: 'Layout/Container',
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
                component: `Container — purpose-driven component from the design system. Use this component for its primary role in the UI, follow the system tokens for spacing and colour, and ensure a clear accessible name is provided. Follow keyboard and screen-reader best practices when the component is interactive.

Design tokens are documented below.`,
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
