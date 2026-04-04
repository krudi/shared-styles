import type { Meta, StoryObj } from '@storybook/html-vite';

const meta = {
    title: 'Utilities/Visibility',
    render: (): string => `
        <div class="d-grid gap-4">
            <div class="bg-white-100">
                <span class="sr-only">Screen reader only label</span>
                <span aria-hidden="true">Visible label (sr-only text hidden)</span>
            </div>
        </div>
    `,
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                component: `Visibility — purpose-driven component from the design system. Use this component for its primary role in the UI, follow the system tokens for spacing and colour, and ensure a clear accessible name is provided. Follow keyboard and screen-reader best practices when the component is interactive.

Design tokens: see the Tokens story under the theme section (theme/Tokens) for reference to CSS variables and token names.`,
            },
        },
    },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
