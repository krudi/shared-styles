import type { Meta, StoryObj } from '@storybook/html-vite';

const meta = {
    title: 'Theme/Tokens',
    tags: ['autodocs'],
    render: (): string => `
        <div class="d-grid gap-4">
            <section class="bg-white-100 p-2 radius-sm">
                <div class="text-gray">Theme API</div>
                <div class="d-grid gap-2">
                    <div>Public overrides: --background / --foreground / --surface / --surface-foreground</div>
                    <div>Public overrides: --muted / --muted-foreground / --border / --input / --ring</div>
                    <div>Public overrides: --primary / --primary-foreground / --secondary / --secondary-foreground</div>
                    <div>Public overrides: --destructive / --destructive-foreground / --accent / --accent-foreground</div>
                    <div>Advanced palette overrides: --color-neutral-* / --color-secondary-100 / --color-destructive-600</div>
                </div>
            </section>
            <section class="bg-white-100 p-2 radius-sm">
                <div class="text-gray">Spacing</div>
                <div class="d-grid gap-2">
                    <div>--spacer-0 ... --spacer-11</div>
                </div>
            </section>
            <section class="bg-white-100 p-2 radius-sm">
                <div class="text-gray">Typography</div>
                <div class="d-grid gap-2">
                    <div>--fs-xs / --fs-sm / --fs-md / --fs-lg / --fs-xl</div>
                    <div>--heading-1 ... --heading-6</div>
                    <div>--body-font-size / --base-line-height / --heading-font-weight / --heading-line-height</div>
                    <div>--a-font-size / --a-font-weight / --a-line-height</div>
                </div>
            </section>
            <section class="bg-white-100 p-2 radius-sm">
                <div class="text-gray">Component Tokens</div>
                <div class="d-grid gap-2">
                    <div>--button-line-height / --badge-line-height / --form-input-line-height</div>
                    <div>--accordion-summary-gap / --dropdown-trigger-gap / --pagination-border-radius</div>
                    <div>--modal-close-inset-inline-end / --modal-close-inset-block-start</div>
                    <div>--tabs-trigger-padding-inline / --tabs-panel-padding / --pricing-table-card-padding</div>
                </div>
            </section>
            <section class="bg-white-100 p-2 radius-sm">
                <div class="text-gray">Radii</div>
                <div class="d-flex gap-2" style="flex-wrap: wrap;">
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
                <div class="d-flex gap-2" style="flex-wrap: wrap;">
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
                component:
                    'Theme contract overview. Override semantic theme tokens for normal theming. Use the palette layer only when you want to rebuild the base color system underneath those semantic mappings.',
            },
        },
    },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
