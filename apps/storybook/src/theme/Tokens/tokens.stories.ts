import type { Meta, StoryObj } from '@storybook/html-vite';

const meta = {
    title: 'Theme/Tokens',
    tags: ['autodocs'],
    render: (): string => `
        <div style="display: grid; gap: var(--spacer);">
            <section class="bg-white-100 p-2 radius-sm">
                <div class="text-gray">Spacing</div>
                <div style="display: grid; gap: var(--spacer-n2);">
                    <div>--spacer-n1 / --spacer / --spacer-1 / --spacer-2 / --spacer-3 / --spacer-4</div>
                </div>
            </section>
            <section class="bg-white-100 p-2 radius-sm">
                <div class="text-gray">Typography</div>
                <div style="display: grid; gap: var(--spacer-n2);">
                    <div>--fs-xs / --fs-sm / --fs-md / --fs-lg / --fs-xl</div>
                    <div>--heading-1 ... --heading-6</div>
                    <div>--line-height-110 ... --line-height-18125</div>
                </div>
            </section>
            <section class="bg-white-100 p-2 radius-sm">
                <div class="text-gray">Radii</div>
                <div style="display: flex; gap: var(--spacer-n2); flex-wrap: wrap;">
                    <div class="bg-white radius-xs p-2">xs</div>
                    <div class="bg-white radius-sm p-2">sm</div>
                    <div class="bg-white radius-md p-2">md</div>
                    <div class="bg-white radius-lg p-2">lg</div>
                    <div class="bg-white radius-xl p-2">xl</div>
                    <div class="bg-white radius-full p-2">full</div>
                </div>
            </section>
            <section class="bg-white-100 p-2 radius-sm">
                <div class="text-gray">Shadows</div>
                <div style="display: flex; gap: var(--spacer-n2); flex-wrap: wrap;">
                    <div class="bg-white p-2" style="box-shadow: var(--shadow-sm);">--shadow-sm</div>
                    <div class="bg-white p-2" style="box-shadow: var(--shadow-md);">--shadow-md</div>
                    <div class="bg-white p-2" style="box-shadow: var(--shadow-lg);">--shadow-lg</div>
                </div>
            </section>
        </div>
    `,
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                component: 'Snapshot of key design tokens used across utilities and components.',
            },
        },
    },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
