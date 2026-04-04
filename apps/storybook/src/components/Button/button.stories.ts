import type { Meta, StoryObj } from '@storybook/html-vite';

import type { ButtonArgs } from './button.types';

const meta = {
    title: 'Components/Button',
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
                component: `Button — purpose-driven component from the design system. Use this component for its primary role in the UI, follow the system tokens for spacing and colour, and ensure a clear accessible name is provided. Follow keyboard and screen-reader best practices when the component is interactive. Example markup: <code>&lt;button&gt;…&lt;/button&gt;</code>.

Design tokens are documented below.`,
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
                story: 'Default button example — use for primary actions. Shows default styling, focus and disabled handling.',
            },
        },
    },
};

export const Variants: Story = {
    render: (): string => `
        <div class="d-flex gap-2" style="flex-wrap: wrap;">
            <button class="btn btn-default" type="button">Default</button>
            <button class="btn btn-secondary" type="button">Secondary</button>
            <button class="btn btn-outline" type="button">Outline</button>
            <button class="btn btn-ghost" type="button">Ghost</button>
            <button class="btn btn-destructive" type="button">Destructive</button>
            <a class="btn btn-link" href="#button-link">Link</a>
        </div>
    `,
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Variant overview — shows all visual variants. Prefer <button> for actions; style anchors only for navigation.',
            },
        },
    },
};

export const Secondary = {
    args: { variant: 'secondary' },
    parameters: {
        controls: { disable: true },
        docs: { description: { story: 'Secondary variant — shows the secondary appearance.' } },
    },
};

export const Outline = {
    args: { variant: 'outline' },
    parameters: {
        controls: { disable: true },
        docs: { description: { story: 'Outline variant — shows the outline appearance.' } },
    },
};

export const Ghost = {
    args: { variant: 'ghost' },
    parameters: {
        controls: { disable: true },
        docs: { description: { story: 'Ghost variant — shows the ghost appearance.' } },
    },
};

export const Destructive = {
    args: { variant: 'destructive' },
    parameters: {
        controls: { disable: true },
        docs: { description: { story: 'Destructive variant — shows the destructive appearance.' } },
    },
};

export const Link = {
    args: { variant: 'link' },
    parameters: {
        controls: { disable: true },
        docs: { description: { story: 'Link variant — shows the link appearance.' } },
    },
};
