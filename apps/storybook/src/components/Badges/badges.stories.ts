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
        variant: 'default',
    },
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: [
                { className: 'badge-default', label: 'Default', usage: 'Primary highlights, key statuses.' },
                { className: 'badge-secondary', label: 'Secondary', usage: 'Supporting categories and tags.' },
                { className: 'badge-outline', label: 'Outline', usage: 'Neutral tags with outline.' },
                { className: 'badge-destructive', label: 'Destructive', usage: 'Destructive or critical statuses.' },
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
                story: 'Canonical badge example with the default variant.',
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
