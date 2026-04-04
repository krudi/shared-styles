import type { Meta, StoryObj } from '@storybook/html-vite';

import type { TextArgs } from './text.types';

const meta = {
    title: 'Forms/Text',
    render: (): string => `
        <span class="form-text">Helper text appears below fields.</span>
        <span class="form-text-hint">Hint text draws attention to requirements.</span>
        <span class="form-text-error">Error text calls out validation issues.</span>
    `,
    parameters: {
        docs: {
            description: {
                component: `Text — purpose-driven component from the design system. Use this component for its primary role in the UI, follow the system tokens for spacing and colour, and ensure a clear accessible name is provided. Follow keyboard and screen-reader best practices when the component is interactive.

Design tokens are documented below.`,
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
