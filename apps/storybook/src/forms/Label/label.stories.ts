import type { Meta, StoryObj } from '@storybook/html-vite';

import type { LabelArgs } from './label.types';

const meta = {
    title: 'Forms/Label',
    tags: ['autodocs'],
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
                component: 'Label styling for form fields with optional required indicators.',
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

export const Playground: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Toggle the required indicator to match validation requirements.',
            },
        },
    },
};
