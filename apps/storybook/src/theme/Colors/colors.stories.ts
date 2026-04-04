import type { Meta, StoryObj } from '@storybook/html-vite';

const meta = {
    title: 'Theme/Colors',
    render: (): string => `
        ${[
            {
                label: 'Primary',
                className: 'bg-black',
                token: '--krd-color-primary',
                usage: 'High-emphasis actions and surfaces.',
            },
            {
                label: 'Secondary',
                className: 'bg-secondary',
                token: '--krd-color-secondary',
                usage: 'Supporting actions and complementary surfaces.',
            },
            {
                label: 'Muted',
                className: 'bg-gray',
                token: '--krd-color-muted-foreground',
                usage: 'Muted body text and secondary UI.',
            },
            {
                label: 'Background',
                className: 'bg-white',
                token: '--krd-color-background',
                usage: 'Base background with strong contrast against text.',
            },
            {
                label: 'Surface',
                className: 'bg-white-100',
                token: '--krd-color-surface-subtle',
                usage: 'Subtle containers and raised neutral surfaces.',
            },
        ]
            .map(
                (swatch) => `
            <article>
                <div class="${swatch.className}">
                    <span>${swatch.label}</span>
                    <span>${swatch.token}</span>
                </div>
                <div class="p-2 text-gray">${swatch.usage}</div>
            </article>
        `
            )
            .join('')}
    `,
    parameters: {
        docs: {
            description: {
                component: `Colors — purpose-driven component from the design system. Use this component for its primary role in the UI, follow the system tokens for spacing and colour, and ensure a clear accessible name is provided. Follow keyboard and screen-reader best practices when the component is interactive.

Design tokens: see the Tokens story under the theme section (theme/Tokens) for reference to CSS variables and token names.`,
            },
        },
    },
} satisfies Meta<ColorsArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Use the semantic theme tokens as the theming API. Utility classes remain for previewing the current mappings, but components should consume semantic roles rather than color-name tokens.',
            },
        },
    },
};
