import type { Meta, StoryObj } from '@storybook/html-vite';

const meta = {
    title: 'Utilities/BorderRadius',
    tags: ['autodocs'],
    render: (): string => `
        <div style="display: grid; gap: var(--spacer);">
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
                component: 'Border radius utilities mapped to the radius scale.',
            },
        },
    },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
