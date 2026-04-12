import type { Meta, StoryObj } from '@storybook/html-vite';

const meta = {
    title: 'Utilities/Display',
    render: (): string => `
        <div class="d-grid gap-4">
            <div class="d-block bg-white-100">.d-block</div>
            <div class="d-inline bg-white-100">.d-inline</div>
            <div class="d-inline-block bg-white-100">.d-inline-block</div>
            <div class="d-flex gap-2">
                <div class="bg-white-100">.d-flex</div>
                <div class="bg-white-200">item</div>
            </div>
            <div class="d-flex flex-row items-center gap-2">
                <div class="bg-white-100">.flex-row</div>
                <div class="bg-white-200">.items-center</div>
            </div>
            <div class="d-grid gap-2">
                <div class="bg-white-100">.d-grid</div>
                <div class="bg-white-200">item</div>
            </div>
        </div>
    `,
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                component: `Display — purpose-driven component from the design system. Use this component for its primary role in the UI, follow the system tokens for spacing and colour, and ensure a clear accessible name is provided. Follow keyboard and screen-reader best practices when the component is interactive.

Design tokens: see the Tokens story under the theme section (theme/Tokens) for reference to CSS variables and token names.`,
            },
        },
    },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
