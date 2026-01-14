import type { Meta, StoryObj } from '@storybook/html-vite';

import type { ListArgs } from './list.types';

const meta = {
    title: 'Components/List',
    tags: ['autodocs'],
    render: ({ items }: ListArgs): string => `
        <ul class="unordered-list">
            ${items.map((item) => `<li>${item}</li>`).join('')}
        </ul>
    `,
    args: {
        items: [
            'Consistent zero margins via .unordered-list.',
            'Use regular list semantics for accessibility.',
            'Apply utilities for spacing and colour as needed.',
        ],
    },
    argTypes: {
        items: { control: 'object' },
    },
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component:
                    'Reset-style unordered list helper. Apply <code>.unordered-list</code> to remove default margins and control spacing yourself.',
            },
        },
    },
} satisfies Meta<ListArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Canonical unordered list example.',
            },
        },
    },
};

export const Playground: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Add or remove list items with the controls to see spacing and bullets update.',
            },
        },
    },
};
