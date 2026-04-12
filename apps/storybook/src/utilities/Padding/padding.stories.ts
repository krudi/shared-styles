import type { Meta, StoryObj } from '@storybook/html-vite';

import type { PaddingArgs } from './padding.types';

const meta = {
    title: 'Utilities/Padding',
    render: (): string => `
        <h2 class="h4 mt-0">Padding helpers</h2>
        <div class="p-0 bg-white-100 mb-1">.p-0</div>
        <div class="p-1 bg-white-100 mb-1">.p-1</div>
        <div class="p-2 bg-white-100 mb-1">.p-2</div>
        <div class="p-3 bg-white-100 mb-1">.p-3</div>
        <div class="p-4 bg-white-100 mb-1">.p-4</div>
        <div class="p-5 bg-white-100 mb-1">.p-5</div>
        <div class="p-8 bg-white-100">.p-8</div>
        <p class="mt-2 text-gray mb-0">Padding utilities map directly to the spacing scale for consistent spacing.</p>
    `,
    parameters: {
        docs: {
            description: {
                component: `Padding — purpose-driven component from the design system. Use this component for its primary role in the UI, follow the system tokens for spacing and colour, and ensure a clear accessible name is provided. Follow keyboard and screen-reader best practices when the component is interactive.

Design tokens: see the Tokens story under the theme section (theme/Tokens) for reference to CSS variables and token names.`,
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
