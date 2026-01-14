import type { Meta, StoryObj } from '@storybook/html-vite';

import type { BadgeArgs } from './badges.types';

const meta = {
    title: 'Components/Badges',
    tags: ['autodocs'],
    render: ({ label, variant }: BadgeArgs): string => `
        <span class="badge badge-${variant}">${label}</span>
    `,
    args: {
        label: 'Notify',
        variant: 'primary',
    },
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: [
                { className: 'badge-primary', label: 'Primary', usage: 'Primary highlights, key statuses.' },
                { className: 'badge-secondary', label: 'Secondary', usage: 'Supporting categories and tags.' },
                { className: 'badge-success', label: 'Success', usage: 'Positive confirmations.' },
                { className: 'badge-info', label: 'Info', usage: 'Neutral informational hints.' },
                { className: 'badge-warning', label: 'Warning', usage: 'Cautionary messaging.' },
                { className: 'badge-danger', label: 'Danger', usage: 'Errors or destructive actions.' },
            ].map((badge) => badge.className.replace('badge-', '')),
        },
        label: { control: 'text' },
    },
    parameters: {
        docs: {
            description: {
                component:
                    'Status and taxonomy chips built on the design token radius, padding, and font sizing. Variants align to the theme palette.',
            },
        },
    },
} satisfies Meta<BadgeArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Canonical badge example with the primary variant.',
            },
        },
    },
};

export const Playground: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Use the controls to toggle label and variant.',
            },
        },
    },
};
