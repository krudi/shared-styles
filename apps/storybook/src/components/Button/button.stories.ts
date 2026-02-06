import type { Meta, StoryObj } from '@storybook/html-vite';

import type { ButtonArgs } from './button.types';

const meta = {
    title: 'Components/Button',
    tags: ['autodocs'],
    render: ({ label, variant, size, disabled }: ButtonArgs): string => {
        const classes = ['btn', `btn-${variant}`];

        if (size === 'sm') {
            classes.push('btn-sm');
        }

        return `
        <button class="${classes.join(' ')}" type="button" ${disabled ? 'disabled' : ''} aria-label="${label}">
            ${label}
        </button>
    `;
    },
    args: {
        label: 'Action',
        variant: 'default',
        size: 'default',
        disabled: false,
    },
    argTypes: {
        label: { control: 'text', description: 'Text inside the button' },
        variant: {
            control: 'inline-radio',
            options: ['default', 'secondary', 'outline', 'ghost', 'destructive', 'link'],
            description: 'Visual style of the button',
        },
        size: {
            control: 'inline-radio',
            options: ['default', 'sm'],
            description: 'Size of the button',
        },
        disabled: { control: 'boolean', description: 'Disable the button' },
    },
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Buttons with tokenised variants, sizes, and disabled states for consistent interactions.',
            },
        },
    },
} satisfies Meta<ButtonArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Canonical default button example.',
            },
        },
    },
};

export const Playground: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Use the controls to switch variant, size, and disabled state.',
            },
        },
    },
};
