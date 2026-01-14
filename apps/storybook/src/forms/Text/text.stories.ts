import type { Meta, StoryObj } from '@storybook/html-vite';

import type { TextArgs } from './text.types';

const meta = {
    title: 'Forms/Text',
    tags: ['autodocs'],
    render: (): string => `
        <span class="form-text">Helper text appears below fields.</span>
        <span class="form-text-hint">Hint text draws attention to requirements.</span>
        <span class="form-text-error">Error text calls out validation issues.</span>
    `,
    parameters: {
        docs: {
            description: {
                component: 'Supportive form text styles for hints and validation messaging.',
            },
        },
    },
} satisfies Meta<TextArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Helper, hint, and error text treatments for form feedback.',
            },
        },
    },
};

export const Playground: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Pair these text styles with inputs to reinforce validation states.',
            },
        },
    },
};
