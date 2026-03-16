import type { Meta, StoryObj } from '@storybook/html-vite';

import type { FieldsetArgs } from './fieldset.types';

const meta = {
    title: 'Forms/Fieldset',
    tags: ['autodocs'],
    render: (): string => `
        <fieldset class="form-fieldset">
            <legend class="form-legend">Contact preferences</legend>
            <div class="form-block">
                <label class="form-label" for="fieldset-email">Email</label>
                <input class="form-control" id="fieldset-email" type="email" placeholder="name@example.com" />
            </div>
            <div class="form-block">
                <label class="form-label" for="fieldset-channel">Preferred channel</label>
                <select class="form-select" id="fieldset-channel">
                    <option>Email</option>
                    <option>Phone</option>
                    <option>SMS</option>
                </select>
            </div>
        </fieldset>
    `,
    parameters: {
        docs: {
            description: {
                component:
                    'Fieldset container styling for grouped form sections using the current <code>.form-fieldset</code> API.',
            },
        },
    },
} satisfies Meta<FieldsetArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Fieldset styling groups related form controls with consistent padding, borders, and validation-aware select/input states.',
            },
        },
    },
};

export const Playground: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Use <code>.form-fieldset</code> with <code>.form-legend</code> to group related fields under a shared visual container.',
            },
        },
    },
};
