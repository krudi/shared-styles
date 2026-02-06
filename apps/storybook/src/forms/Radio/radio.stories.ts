import type { Meta, StoryObj } from '@storybook/html-vite';

import type { RadioArgs } from './radio.types';

const meta = {
    title: 'Forms/Radio',
    tags: ['autodocs'],
    render: (): string => `
        <div class="form-block">
            <div class="form-radio">
                <input class="form-radio-input" id="radio-monthly" name="billing" type="radio" checked />
                <label class="form-radio-label" for="radio-monthly">Monthly billing</label>
            </div>
            <div class="form-radio">
                <input class="form-radio-input" id="radio-annual" name="billing" type="radio" />
                <label class="form-radio-label" for="radio-annual">Annual billing</label>
            </div>
        </div>
    `,
    parameters: {
        docs: {
            description: {
                component: 'Radio styling for single-select inputs.',
            },
        },
    },
} satisfies Meta<RadioArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Radio styling for single-select inputs with aligned labels.',
            },
        },
    },
};

export const Playground: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Use radio inputs for mutually exclusive choices.',
            },
        },
    },
};

export const UserInvalid: Story = {
    render: (): string => `
        <div class="form-block">
            <div class="form-radio">
                <input class="form-radio-input" id="radio-required-yes" name="required-choice" type="radio" required />
                <label class="form-radio-label" for="radio-required-yes">Yes</label>
            </div>
            <div class="form-radio">
                <input class="form-radio-input" id="radio-required-no" name="required-choice" type="radio" />
                <label class="form-radio-label" for="radio-required-no">No</label>
            </div>
            <span class="form-text">Select then deselect to see <code>:user-invalid</code>.</span>
        </div>
    `,
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Shows the <code>:user-invalid</code> state for a required radio group.',
            },
        },
    },
};

export const UserValid: Story = {
    render: (): string => `
        <div class="form-block">
            <div class="form-radio">
                <input
                    class="form-radio-input"
                    id="radio-valid-yes"
                    name="valid-choice"
                    type="radio"
                    required
                    checked
                />
                <label class="form-radio-label" for="radio-valid-yes">Yes</label>
            </div>
            <div class="form-radio">
                <input class="form-radio-input" id="radio-valid-no" name="valid-choice" type="radio" />
                <label class="form-radio-label" for="radio-valid-no">No</label>
            </div>
            <span class="form-text">Toggle to see <code>:user-valid</code>.</span>
        </div>
    `,
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Shows the <code>:user-valid</code> state for a required radio group.',
            },
        },
    },
};
