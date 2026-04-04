import type { Meta, StoryObj } from '@storybook/html-vite';

const meta = {
    title: 'Utilities/Gap',
    render: (): string => `
        <h2 class="h4 mt-0">Gap helpers</h2>
        <div class="d-grid gap-4">
            <div class="d-grid gap-1">
                <div class="bg-white-100 p-2">.gap-1</div>
                <div class="bg-white-100 p-2">grid item</div>
            </div>
            <div class="d-flex gap-2">
                <div class="bg-white-100 p-2">.gap-2</div>
                <div class="bg-white-200 p-2">flex item</div>
                <div class="bg-white-300 p-2">flex item</div>
            </div>
            <div class="d-grid row-gap-3 column-gap-1" style="grid-template-columns: repeat(2, minmax(0, 1fr));">
                <div class="bg-white-100 p-2">.row-gap-3</div>
                <div class="bg-white-200 p-2">.column-gap-1</div>
                <div class="bg-white-300 p-2">grid item</div>
                <div class="bg-white p-2">grid item</div>
            </div>
        </div>
        <p class="mt-2 text-gray mb-0">Gap utilities apply the shared spacer scale to grid and flex layouts.</p>
    `,
    parameters: {
        docs: {
            description: {
                component: `Gap — purpose-driven component from the design system. Use this component for its primary role in the UI, follow the system tokens for spacing and colour, and ensure a clear accessible name is provided. Follow keyboard and screen-reader best practices when the component is interactive.

Design tokens: see the Tokens story under the theme section (theme/Tokens) for reference to CSS variables and token names.`,
            },
        },
    },
} satisfies Meta<GapArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Canonical gap utility examples for both flex and grid layouts.',
            },
        },
    },
};
