import type { Meta, StoryObj } from '@storybook/html-vite';

import type { LegendArgs } from './legend.types';

const meta = {
    title: 'Forms/Legend',
    tags: ['autodocs'],
    render: ({ text }: LegendArgs): string => `
        <fieldset class="form-fieldset">
            <legend class="form-legend">${text}</legend>
            <span class="form-text">Legend labels the group of fields inside a fieldset.</span>
        </fieldset>
    `,
    args: {
        text: 'Payment details',
    },
    argTypes: {
        text: { control: 'text' },
    },
    parameters: {
        docs: {
            description: {
                component: 'Legend styling for fieldset headings and grouped labels via <code>.form-legend</code>.',
            },
        },
    },
} satisfies Meta<LegendArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Legend styling for grouped form content inside <code>.form-fieldset</code>.',
            },
        },
    },
};

export const Playground: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Update legend copy to label grouped fields.',
            },
        },
    },
};

export const WithGroupedFields: Story = {
    render: (): string => `
        <fieldset class="form-fieldset">
            <legend class="form-legend">Billing address</legend>
            <span class="form-text">Legends now remain in normal flow above helper text and grouped controls.</span>
            <div class="form-block">
                <label class="form-label" for="legend-street">Street</label>
                <input class="form-control" id="legend-street" type="text" placeholder="Example Street 10" />
            </div>
            <div class="form-block">
                <label class="form-label" for="legend-city">City</label>
                <input class="form-control" id="legend-city" type="text" placeholder="Hamburg" />
            </div>
        </fieldset>
    `,
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Use this pattern to verify that <code>.form-legend</code> aligns naturally with helper text and subsequent <code>.form-block</code> content.',
            },
        },
    },
};
