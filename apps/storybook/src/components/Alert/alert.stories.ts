import type { Meta, StoryObj } from '@storybook/html-vite';

import type { AlertArgs } from './alert.types';

const meta = {
    title: 'Components/Alert',
    render: ({ title, description, variant }: AlertArgs): string => `
        <div class="alert${variant === 'destructive' ? ' alert-destructive' : ''}" role="alert">
            <p class="alert-title">${title}</p>
            <div class="alert-description">${description}</div>
        </div>
    `,
    args: {
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
                component: `Alert — purpose-driven component from the design system. Use this component for its primary role in the UI, follow the system tokens for spacing and colour, and ensure a clear accessible name is provided. Follow keyboard and screen-reader best practices when the component is interactive. Example markup: <code>&lt;div role="alert"&gt;…&lt;/div&gt;</code>.

Design tokens are documented below.`,
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
                story: 'Neutral alert — concise informational callout. Keep title and description short and scannable.',
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
                story: 'Destructive alert — use for errors or critical failures. Prefer actionable guidance or links to remediation.',
            },
        },
    },
};
