import type { Meta, StoryObj } from '@storybook/html-vite';

import type { SpacingScaleArgs } from './spacing-scale.types';

const meta = {
    title: 'Utilities/Spacing Scale',
    tags: ['autodocs'],
    render: () => `
        <h2 class="h4 mt-0">Spacing scale</h2>
        ${[
            { token: '--spacer-1', label: '0.5rem, compact controls and dense UI' },
            { token: '--spacer-2', label: '0.75rem, tight gaps and helper text spacing' },
            { token: '--spacer-3', label: '0.875rem, compact text-adjacent spacing' },
            { token: '--spacer-4', label: '1rem, base spacing unit' },
            { token: '--spacer-5', label: '1.25rem, small component gutters' },
            { token: '--spacer-6', label: '1.5rem, section padding and layouts' },
            { token: '--spacer-7', label: '1.75rem, large layout spacing' },
            { token: '--spacer-8', label: '2rem, page rhythm and grids' },
            { token: '--spacer-9', label: '2.5rem, large section spacing' },
            { token: '--spacer-10', label: '4rem, major layout separation' },
            { token: '--spacer-11', label: '8rem, page-scale compositions' },
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
                component: 'Tokenized spacing scale that powers the margin and padding helpers.',
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

export const Playground: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Reference these tokens when building bespoke spacing rules.',
            },
        },
    },
};
