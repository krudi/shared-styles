import type { Meta, StoryObj } from '@storybook/html-vite';

import type { SpacingScaleArgs } from './spacing-scale.types';

const meta = {
    title: 'Utilities/Spacing Scale',
    tags: ['autodocs'],
    render: () => `
        <h2 class="h4 mt-0">Spacing scale</h2>
        ${[
            { token: '--spacer-n2', label: 'Tight padding/margins for dense UI' },
            { token: '--spacer-n1', label: 'Subhead spacing or compact chips' },
            { token: '--spacer', label: 'Base spacing for paragraphs and list items' },
            { token: '--spacer-1', label: 'Cards, small component gutters' },
            { token: '--spacer-2', label: 'Section padding and layouts' },
            { token: '--spacer-3', label: 'Large spacing for hero or page rails' },
            { token: '--spacer-4', label: 'Page-level vertical rhythm and grids' },
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
