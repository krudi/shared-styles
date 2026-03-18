import type { Meta, StoryObj } from '@storybook/html-vite';

import type { AlertArgs } from './alert.types';

const meta = {
    title: 'Components/Alert',
    tags: ['autodocs'],
    render: ({ title, description, variant }: AlertArgs): string => `
        <div class="alert${variant === 'destructive' ? ' alert-destructive' : ''}" role="alert">
            <p class="alert-title">${title}</p>
            <div class="alert-description">${description}</div>
        </div>
    `,
    args: {
        title: 'Heads up',
        description: 'This alert surfaces important information in a compact callout without extra decoration.',
        variant: 'default',
    },
    argTypes: {
        title: { control: 'text' },
        description: { control: 'text' },
        variant: {
            control: 'select',
            options: ['default', 'destructive'],
        },
    },
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component:
                    'Alert callout with a simplified semantic API. Use <code>.alert</code> for the default variant and <code>.alert.alert-destructive</code> for destructive messaging. Canonical markup is a plain stacked block with <code>.alert-title</code> and <code>.alert-description</code> only.',
            },
        },
    },
} satisfies Meta<AlertArgs>;

export default meta;

type Story = StoryObj<AlertArgs>;

export const Default: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Canonical neutral alert callout.',
            },
        },
    },
};

export const Destructive: Story = {
    render: (): string => `
        <div class="alert alert-destructive" role="alert">
            <p class="alert-title">Action failed</p>
            <div class="alert-description">Your changes could not be saved. Review the input and try again.</div>
        </div>
    `,
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Destructive alert variant for error or failure states.',
            },
        },
    },
};

export const Playground: Story = {
    args: {
        title: 'Action failed',
        description: 'Your changes could not be saved. Review the input and try again.',
        variant: 'destructive',
    },
    parameters: {
        docs: {
            description: {
                story: 'Use the controls to preview the simplified alert variants and content without icons or dismiss controls.',
            },
        },
    },
};
