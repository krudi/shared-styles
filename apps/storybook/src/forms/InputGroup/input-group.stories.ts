import type { Meta, StoryObj } from '@storybook/html-vite';

import type { InputGroupArgs } from './input-group.types';

const meta = {
    title: 'Forms/Input Group',
    tags: ['autodocs'],
    render: ({ value, placeholder }: InputGroupArgs): string => `
        <div class="form-input-group">
            <span class="form-input-group-text">@</span>
            <input class="form-control" type="text" placeholder="${placeholder}" value="${value}" />
            <button class="btn btn-primary" type="button">Go</button>
        </div>
    `,
    args: {
        value: '',
        placeholder: 'username',
    },
    argTypes: {
        value: { control: 'text' },
        placeholder: { control: 'text' },
    },
    parameters: {
        docs: {
            description: {
                component: 'Inline input groups for appended or prepended content.',
            },
        },
    },
} satisfies Meta<InputGroupArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Grouped input with leading text and trailing action button.',
            },
        },
    },
};

export const Playground: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Use input groups for composite inputs and inline actions.',
            },
        },
    },
};
