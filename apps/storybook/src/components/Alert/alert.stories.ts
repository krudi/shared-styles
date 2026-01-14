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
            options: ['primary', 'success', 'info', 'warning', 'danger', 'white'],
        },
        dismissible: { control: 'boolean' },
    },
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component:
                    'Alert blocks using palette-aligned variants. Combine <code>.alert</code> with variant classes and optional close button.',
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
                story: 'Use the controls to swap variant, copy, and dismissible state on a single alert.',
            },
        },
    },
};
