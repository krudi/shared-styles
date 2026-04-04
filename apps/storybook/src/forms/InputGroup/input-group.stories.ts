import type { Meta, StoryObj } from '@storybook/html-vite';

import type { InputGroupArgs } from './input-group.types';

const meta = {
    title: 'Forms/Input Group',
    render: ({ value, placeholder }: InputGroupArgs): string => `
        <div class="form-input-group">
            <span class="form-input-group-text">@</span>
            <input class="form-control" type="text" placeholder="${placeholder}" value="${value}" />
            <button class="btn btn-default" type="button">Go</button>
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
        designTokens: 'Forms/Input',
        docs: {
            description: {
                component: `Input Group — purpose-driven component from the design system. Use this component for its primary role in the UI, follow the system tokens for spacing and colour, and ensure a clear accessible name is provided. Follow keyboard and screen-reader best practices when the component is interactive.

Design tokens are documented below.`,
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
