import type { Meta, StoryObj } from '@storybook/html-vite';

import type { ButtonGroupArgs } from './button-group.types';

const meta = {
    title: 'Components/Button Group',
    render: ({ ariaLabel, labels, variant }: ButtonGroupArgs): string => `
        <div class="btn-group" role="group" aria-label="${ariaLabel}">
            ${labels.map((label) => `<button type="button" class="btn btn-${variant}">${label}</button>`).join('')}
        </div>
    `,
    args: {
        ariaLabel: 'Button group actions',
        labels: ['Left', 'Middle', 'Right'],
        variant: 'default',
    },
    argTypes: {
        ariaLabel: { control: 'text' },
        labels: { control: 'object' },
        variant: {
            control: 'inline-radio',
            options: ['default'],
        },
    },
    parameters: {
        designTokens: 'Components/Button Group',
        layout: 'centered',
        docs: {
            description: {
                component: `Button Group — purpose-driven component from the design system. Use this component for its primary role in the UI, follow the system tokens for spacing and colour, and ensure a clear accessible name is provided. Follow keyboard and screen-reader best practices when the component is interactive.

Design tokens are documented below.`,
            },
        },
    },
} satisfies Meta<ButtonGroupArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Canonical three-button group example.',
            },
        },
    },
};
