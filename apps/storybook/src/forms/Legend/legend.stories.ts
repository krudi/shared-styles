import type { Meta, StoryObj } from '@storybook/html-vite';

import type { LegendArgs } from './legend.types';

const meta = {
    title: 'Forms/Legend',
    tags: ['autodocs'],
    render: ({ text }: LegendArgs): string => `
        <fieldset class="fieldset">
            <legend class="legend">${text}</legend>
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
                component: 'Legend styling for fieldset headings and grouped labels.',
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
                story: 'Legend styling for grouped form content.',
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
