import type { Meta, StoryObj } from '@storybook/html-vite';

import type { FieldsetArgs } from './fieldset.types';

const meta = {
    title: 'Forms/Fieldset',
    tags: ['autodocs'],
    render: (): string => `
        <fieldset class="fieldset">
            <legend class="legend">Contact preferences</legend>
            <div class="form-block">
                <label class="form-label" for="fieldset-email">Email</label>
                <input class="form-control" id="fieldset-email" type="email" placeholder="name@example.com" />
            </div>
            <div class="form-block">
                <label class="form-label" for="fieldset-phone">Phone</label>
                <input class="form-control" id="fieldset-phone" type="tel" placeholder="+1 234 567 890" />
            </div>
        </fieldset>
    `,
    parameters: {
        docs: {
            description: {
                component: 'Fieldset container styling for grouped form sections.',
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
                story: 'Fieldset styling groups related form controls with consistent padding and borders.',
            },
        },
    },
};

export const Playground: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Use fieldsets to group related fields and apply shared background styling.',
            },
        },
    },
};
