import type { Meta, StoryObj } from '@storybook/html-vite';

import type { ButtonGroupArgs } from './button-group.types';

const meta = {
    title: 'Components/Button Group',
    tags: ['autodocs'],
    render: ({ labels, variant }: ButtonGroupArgs): string => `
        <div class="btn-group">
            ${labels.map((label) => `<button type="button" class="btn btn-${variant}">${label}</button>`).join('')}
        </div>
    `,
    args: {
        labels: ['Left', 'Middle', 'Right'],
        variant: 'primary',
    },
    argTypes: {
        labels: { control: 'object' },
        variant: {
            control: 'inline-radio',
            options: ['primary', 'secondary', 'outline-primary', 'outline-secondary'],
        },
    },
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component:
                    'Inline button grouping with consistent gap via <code>.btn-group</code>. Combine with any button variants.',
            },
        },
    },
} satisfies Meta<ButtonGroupArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Canonical three-button group example.',
            },
        },
    },
};

export const Playground: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Swap the button labels and variant while preserving the grouped radius.',
            },
        },
    },
};
