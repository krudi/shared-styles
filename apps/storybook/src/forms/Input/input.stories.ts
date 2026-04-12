import type { Meta, StoryObj } from '@storybook/html-vite';

import type { InputArgs } from './input.types';

const meta = {
    title: 'Forms/Input',
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
                component: `Input — purpose-driven component from the design system. Use this component for its primary role in the UI, follow the system tokens for spacing and colour, and ensure a clear accessible name is provided. Follow keyboard and screen-reader best practices when the component is interactive. Example markup: <code>&lt;input&gt;…&lt;/input&gt;</code>.

Design tokens are documented below.`,
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

export const UserInvalid: Story = {
    render: (): string => `
        <div class="form-block">
            <label class="form-label" for="input-user-invalid">Email</label>
            <input
                class="form-control"
                id="input-user-invalid"
                type="email"
                placeholder="name@example.com"
                required
            />
            <span class="form-text">Focus and blur the field to trigger <code>:user-invalid</code>.</span>
        </div>
    `,
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Shows the <code>:user-invalid</code> styling after interacting with an invalid field.',
            },
        },
    },
};

export const UserValid: Story = {
    render: (): string => `
        <div class="form-block">
            <label class="form-label" for="input-user-valid">Email</label>
            <input
                class="form-control"
                id="input-user-valid"
                type="email"
                placeholder="name@example.com"
                value="jane.doe@example.com"
                required
            />
            <span class="form-text">Interact with the field to see <code>:user-valid</code>.</span>
        </div>
    `,
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Shows the <code>:user-valid</code> styling after interacting with a valid field.',
            },
        },
    },
};
