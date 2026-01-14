import type { Meta, StoryObj } from '@storybook/html-vite';

import type { InputArgs } from './input.types';

const meta = {
    title: 'Forms/Input',
    tags: ['autodocs'],
    render: ({ placeholder, value, disabled }: InputArgs): string => `
        <div class="form-block">
            <input
                class="form-control"
                type="text"
                placeholder="${placeholder}"
                value="${value}"
                ${disabled ? 'disabled' : ''}
            />
        </div>
    `,
    args: {
        placeholder: 'name@example.com',
        value: '',
        disabled: false,
    },
    argTypes: {
        placeholder: { control: 'text' },
        value: { control: 'text' },
        disabled: { control: 'boolean' },
    },
    parameters: {
        docs: {
            description: {
                component: 'Text input field styled by the forms layer tokens.',
            },
        },
    },
} satisfies Meta<InputArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Single-line text input styled with the shared form control tokens.',
            },
        },
    },
};

export const Playground: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Adjust placeholder and disabled state to validate input styling.',
            },
        },
    },
};
