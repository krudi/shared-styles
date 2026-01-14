import type { Meta, StoryObj } from '@storybook/html-vite';

import type { UtilitiesArgs } from './utilities.types';

const meta = {
    title: 'Forms/Utilities',
    tags: ['autodocs'],
    render: (): string => `
        <div class="form-block">
            <label class="form-label" for="utilities-name">Name</label>
            <input class="form-control" id="utilities-name" type="text" placeholder="Jane Doe" />
        </div>
        <div class="form-block">
            <label class="form-label" for="utilities-email">Email</label>
            <input class="form-control" id="utilities-email" type="email" placeholder="name@example.com" />
        </div>
    `,
    parameters: {
        docs: {
            description: {
                component: 'Layout utility helpers for stacking form controls.',
            },
        },
    },
} satisfies Meta<UtilitiesArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Form layout utility spacing applied via <code>.form-block</code>.',
            },
        },
    },
};

export const Playground: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Use <code>.form-block</code> to keep consistent vertical spacing between fields.',
            },
        },
    },
};
