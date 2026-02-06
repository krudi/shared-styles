import type { Meta, StoryObj } from '@storybook/html-vite';

import type { SvgArgs } from './svg.types';

const meta = {
    title: 'HTML/Svg',
    tags: ['autodocs'],
    render: ({ label }: SvgArgs): string => `
        <div>
            <svg viewBox="0 0 600 400" role="img" aria-label="${label}">
                <image href="https://placehold.co/600x400" width="600" height="400" />
            </svg>
            <span>${label}</span>
        </div>
    `,
    args: {
        label: 'Inline icon',
    },
    argTypes: {
        label: { control: 'text' },
    },
    parameters: {
        docs: {
            description: {
                component: 'Base SVG styling for icons and inline vector graphics.',
            },
        },
    },
} satisfies Meta<SvgArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'SVG icons inherit size from the CSS variables and current text color.',
            },
        },
    },
};

export const Playground: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Update the label to validate accessibility text.',
            },
        },
    },
};
