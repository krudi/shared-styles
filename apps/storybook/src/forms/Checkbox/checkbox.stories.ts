import type { Meta, StoryObj } from '@storybook/html-vite';

import type { CheckboxArgs } from './checkbox.types';

const meta = {
    title: 'Forms/Checkbox',
    tags: ['autodocs'],
    render: (): string => `
        <div class="form-block">
            <div class="form-checkbox">
                <input class="form-checkbox-input" id="checkbox-updates" type="checkbox" />
                <label class="form-checkbox-label" for="checkbox-updates">Send me updates</label>
            </div>
            <div class="form-checkbox">
                <input class="form-checkbox-input" id="checkbox-terms" type="checkbox" checked />
                <label class="form-checkbox-label" for="checkbox-terms">I agree to the terms</label>
            </div>
        </div>
    `,
    parameters: {
        docs: {
            description: {
                component: 'Checkbox styling for multi-select inputs.',
            },
        },
    },
} satisfies Meta<CheckboxArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Checkbox styling for multi-select inputs with aligned labels.',
            },
        },
    },
};

export const Playground: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Use checkbox inputs for independent toggles.',
            },
        },
    },
};

export const UserInvalid: Story = {
    render: (): string => `
        <div class="form-block">
            <div class="form-checkbox">
                <input class="form-checkbox-input" id="checkbox-required" type="checkbox" required />
                <label class="form-checkbox-label" for="checkbox-required">Accept terms (required)</label>
            </div>
            <span class="form-text">Click then blur to trigger <code>:user-invalid</code>.</span>
        </div>
    `,
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Shows the <code>:user-invalid</code> state for a required checkbox.',
            },
        },
    },
};

export const UserValid: Story = {
    render: (): string => `
        <div class="form-block">
            <div class="form-checkbox">
                <input class="form-checkbox-input" id="checkbox-valid" type="checkbox" required checked />
                <label class="form-checkbox-label" for="checkbox-valid">Accept terms (required)</label>
            </div>
            <span class="form-text">Click to toggle and see <code>:user-valid</code>.</span>
        </div>
    `,
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Shows the <code>:user-valid</code> state for a checked required checkbox.',
            },
        },
    },
};
