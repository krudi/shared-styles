import type { Meta, StoryObj } from '@storybook/html-vite';

const meta = {
    title: 'Utilities/TextAlign',
    render: (): string => `
        <div class="d-grid gap-4">
            <div class="bg-white-100 text-left">.text-left</div>
            <div class="bg-white-100 text-center">.text-center</div>
            <div class="bg-white-100 text-right">.text-right</div>
            <div class="bg-white-100 text-justify">
                .text-justify: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
            </div>
        </div>
    `,
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                component: `TextAlign — purpose-driven component from the design system. Use this component for its primary role in the UI, follow the system tokens for spacing and colour, and ensure a clear accessible name is provided. Follow keyboard and screen-reader best practices when the component is interactive.

Design tokens: see the Tokens story under the theme section (theme/Tokens) for reference to CSS variables and token names.`,
            },
        },
    },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
