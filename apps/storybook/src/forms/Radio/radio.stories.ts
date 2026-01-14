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
