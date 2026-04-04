import type { Meta, StoryObj } from '@storybook/html-vite';

const meta = {
    title: 'Utilities/BorderRadius',
    render: (): string => `
        <div class="d-grid gap-4">
            <div class="bg-white-100 radius-0 p-2">.radius-0</div>
            <div class="bg-white-100 radius-xs p-2">.radius-xs</div>
            <div class="bg-white-100 radius-sm p-2">.radius-sm</div>
            <div class="bg-white-100 radius-md p-2">.radius-md</div>
            <div class="bg-white-100 radius-lg p-2">.radius-lg</div>
            <div class="bg-white-100 radius-xl p-2">.radius-xl</div>
            <div class="bg-white-100 radius-full p-2">.radius-full</div>
        </div>
    `,
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                component: `BorderRadius — purpose-driven component from the design system. Use this component for its primary role in the UI, follow the system tokens for spacing and colour, and ensure a clear accessible name is provided. Follow keyboard and screen-reader best practices when the component is interactive.

Design tokens: see the Tokens story under the theme section (theme/Tokens) for reference to CSS variables and token names.`,
            },
        },
    },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
