import type { Meta, StoryObj } from '@storybook/html-vite';

import type { LabelArgs } from './label.types';

const meta = {
    title: 'Forms/Label',
    render: ({ text, required }: LabelArgs): string => `
        <label class="form-label">
            ${text}${required ? ' <span class="form-label-required" aria-hidden="true">*</span>' : ''}
        </label>
    `,
    args: {
        text: 'Email address',
        required: false,
    },
    argTypes: {
        text: { control: 'text' },
        required: { control: 'boolean' },
    },
    parameters: {
        docs: {
            description: {
                component: `Label — purpose-driven component from the design system. Use this component for its primary role in the UI, follow the system tokens for spacing and colour, and ensure a clear accessible name is provided. Follow keyboard and screen-reader best practices when the component is interactive.

Design tokens are documented below.`,
            },
        },
    },
} satisfies Meta<LabelArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Form label with optional required indicator styling.',
            },
        },
    },
};
