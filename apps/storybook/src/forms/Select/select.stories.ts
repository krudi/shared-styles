import type { Meta, StoryObj } from '@storybook/html-vite';

import type { SelectArgs } from './select.types';

const meta = {
    title: 'Forms/Select',
    render: ({ disabled, multiple }: SelectArgs): string => `
        <div class="form-block">
            <label class="form-label" for="select-role">
                Team role
                <span class="form-label-required" aria-hidden="true">*</span>
            </label>
            <select class="form-select" id="select-role" ${disabled ? 'disabled' : ''} ${multiple ? 'multiple' : ''}>
                <option value="">Choose a role</option>
                <option selected>Developer</option>
                <option>Designer</option>
                <option>Product manager</option>
            </select>
            <span class="form-text-hint">Supports single and multiple selection with the same token set as inputs.</span>
        </div>
    `,
    args: {
        disabled: false,
        multiple: false,
    },
    argTypes: {
        disabled: { control: 'boolean' },
        multiple: { control: 'boolean' },
    },
    parameters: {
        designTokens: 'Forms/Input',
        docs: {
            description: {
                component: `Select — purpose-driven component from the design system. Use this component for its primary role in the UI, follow the system tokens for spacing and colour, and ensure a clear accessible name is provided. Follow keyboard and screen-reader best practices when the component is interactive. Example markup: <code>&lt;select&gt;…&lt;/select&gt;</code>.

Design tokens are documented below.`,
            },
        },
    },
} satisfies Meta<SelectArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Single-select dropdown styled with the same tokens as text inputs.',
            },
        },
    },
};

export const UserInvalid: Story = {
    render: (): string => `
        <div class="form-block">
            <label class="form-label" for="select-invalid">Department</label>
            <select class="form-select" id="select-invalid" required>
                <option value="">Choose a department</option>
                <option>Engineering</option>
                <option>Marketing</option>
                <option>Operations</option>
            </select>
            <span class="form-text">Focus and blur the field to trigger <code>:user-invalid</code>.</span>
        </div>
    `,
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Shows the <code>:user-invalid</code> styling for a required select.',
            },
        },
    },
};

export const UserValid: Story = {
    render: (): string => `
        <div class="form-block">
            <label class="form-label" for="select-valid">Department</label>
            <select class="form-select" id="select-valid" required>
                <option value="">Choose a department</option>
                <option selected>Engineering</option>
                <option>Marketing</option>
                <option>Operations</option>
            </select>
            <span class="form-text">Interact with the field to see <code>:user-valid</code>.</span>
        </div>
    `,
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Shows the <code>:user-valid</code> styling for a completed select.',
            },
        },
    },
};
