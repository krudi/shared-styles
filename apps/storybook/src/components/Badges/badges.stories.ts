import type { Meta, StoryObj } from '@storybook/html-vite';

import type { BadgeArgs } from './badges.types';

const meta = {
    title: 'Components/Badges',
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
                component: `Badges — purpose-driven component from the design system. Use this component for its primary role in the UI, follow the system tokens for spacing and colour, and ensure a clear accessible name is provided. Follow keyboard and screen-reader best practices when the component is interactive.

Design tokens are documented below.`,
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

export const Secondary = {
    args: { variant: 'secondary' },
    parameters: { controls: { disable: true }, docs: { description: { story: 'Secondary — Secondary' } } },
};

export const Outline = {
    args: { variant: 'outline' },
    parameters: { controls: { disable: true }, docs: { description: { story: 'Outline — Outline' } } },
};

export const Destructive = {
    args: { variant: 'destructive' },
    parameters: { controls: { disable: true }, docs: { description: { story: 'Destructive — Destructive' } } },
};
