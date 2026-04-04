import type { Meta, StoryObj } from '@storybook/html-vite';

const meta = {
    title: 'Utilities/SpacingScale',
    render: () => `
        <h2 class="h4 mt-0">Spacing scale</h2>
        ${[
            { token: '--krd-space-1', label: '0.5rem, compact controls and dense UI' },
            { token: '--krd-space-2', label: '0.75rem, tight gaps and helper text spacing' },
            { token: '--krd-space-3', label: '0.875rem, compact text-adjacent spacing' },
            { token: '--krd-space-4', label: '1rem, base spacing unit' },
            { token: '--krd-space-5', label: '1.25rem, small component gutters' },
            { token: '--krd-space-6', label: '1.5rem, section padding and layouts' },
            { token: '--krd-space-7', label: '1.75rem, large layout spacing' },
            { token: '--krd-space-8', label: '2rem, page rhythm and grids' },
            { token: '--krd-space-9', label: '2.5rem, large section spacing' },
            { token: '--krd-space-10', label: '4rem, major layout separation' },
            { token: '--krd-space-11', label: '8rem, page-scale compositions' },
        ]
            .map(
                (spacing) => `
            <p class="m-0">
                <code>${spacing.token}</code>
                <span class="text-gray">${spacing.label}</span>
            </p>
        `
            )
            .join('')}
    `,
    parameters: {
        docs: {
            description: {
                component: `Spacing Scale — purpose-driven component from the design system. Use this component for its primary role in the UI, follow the system tokens for spacing and colour, and ensure a clear accessible name is provided. Follow keyboard and screen-reader best practices when the component is interactive.

Design tokens: see the Tokens story under the theme section (theme/Tokens) for reference to CSS variables and token names.`,
            },
        },
    },
} satisfies Meta<SpacingScaleArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Tokens back the spacing helpers for consistent rhythm across components and layouts.',
            },
        },
    },
};
