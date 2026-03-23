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

export const NestedFieldsets: Story = {
    render: (): string => `
        <fieldset class="form-fieldset">
            <legend class="form-legend">Organisation details</legend>
            <div class="form-block">
                <label class="form-label" for="fieldset-company">Company</label>
                <input class="form-control" id="fieldset-company" type="text" placeholder="Example GmbH" />
            </div>
            <fieldset class="form-fieldset">
                <legend class="form-legend">Primary contact</legend>
                <div class="form-block">
                    <label class="form-label" for="fieldset-contact-name">Name</label>
                    <input class="form-control" id="fieldset-contact-name" type="text" placeholder="Jane Doe" />
                </div>
                <div class="form-block">
                    <label class="form-label" for="fieldset-contact-email">Email</label>
                    <input
                        class="form-control"
                        id="fieldset-contact-email"
                        type="email"
                        placeholder="name@example.com"
                    />
                </div>
            </fieldset>
            <div class="form-block">
                <label class="form-label" for="fieldset-notes">Notes</label>
                <input class="form-control" id="fieldset-notes" type="text" placeholder="Additional context" />
            </div>
        </fieldset>
    `,
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Nested <code>.form-fieldset</code> elements keep a separate block-end margin so grouped sub-sections do not collapse into surrounding controls.',
            },
        },
    },
};
