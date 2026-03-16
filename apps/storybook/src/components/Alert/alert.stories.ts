import type { Meta, StoryObj } from '@storybook/html-vite';

import type { AlertArgs } from './alert.types';

const meta = {
    title: 'Components/Alert',
    tags: ['autodocs'],
    render: ({ title, description, variant, dismissible }: AlertArgs): string => `
        <div class="alert alert-${variant}">
            <p class="alert-title">${title}</p>
            <span class="alert-description">${description}</span>
            ${
                dismissible
                    ? `<button type="button" class="btn btn-close alert-close" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>`
                    : ''
            }
        </div>
    `,
    args: {
        title: 'Primary alert',
        description: 'Use to highlight important information.',
        variant: 'primary',
        dismissible: true,
    },
    argTypes: {
        title: { control: 'text' },
        description: { control: 'text' },
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'white'],
        },
        dismissible: { control: 'boolean' },
    },
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component:
                    'Alert blocks using the currently supported variants. Combine <code>.alert</code> with <code>.alert-primary</code>, <code>.alert-secondary</code>, or <code>.alert-white</code>.',
            },
        },
    },
} satisfies Meta<AlertArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Canonical alert example with default variant and copy.',
            },
        },
    },
};

export const Playground: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Use the controls to swap between the currently supported alert variants, copy, and dismissible state.',
            },
        },
    },
};
