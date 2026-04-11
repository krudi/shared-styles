import type { Meta, StoryObj } from '@storybook/html-vite';

import type { MarginArgs } from './margin.types';

const meta = {
    title: 'Utilities/Margin',
    render: (): string => `
        <h2 class="h4 mt-0">Margin helpers</h2>
        <div class="p-2 bg-white-100">
            <div class="mb-1 p-1 bg-white">.mb-1 .p-1</div>
            <div class="mt-3 p-2 bg-white">.mt-3</div>
            <div class="mb-5 p-2 bg-white">.mb-5</div>
            <div class="mx-auto p-2 bg-white">.mx-auto</div>
        </div>
        <p class="mt-2 text-gray mb-0">Margin utilities map to the spacing scale for predictable layout adjustments.</p>
    `,
    parameters: {
        docs: {
            description: {
                component: `Margin — purpose-driven component from the design system. Use this component for its primary role in the UI, follow the system tokens for spacing and colour, and ensure a clear accessible name is provided. Follow keyboard and screen-reader best practices when the component is interactive.

Design tokens: see the Tokens story under the theme section (theme/Tokens) for reference to CSS variables and token names.`,
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
