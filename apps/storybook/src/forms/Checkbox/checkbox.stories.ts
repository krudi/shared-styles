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
