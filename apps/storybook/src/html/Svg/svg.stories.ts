import type { Meta, StoryObj } from '@storybook/html-vite';

import type { SvgArgs } from './svg.types';

const meta = {
    title: 'HTML/Svg',
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
                component: `Svg — purpose-driven component from the design system. Use this component for its primary role in the UI, follow the system tokens for spacing and colour, and ensure a clear accessible name is provided. Follow keyboard and screen-reader best practices when the component is interactive. Example markup: <code>&lt;svg&gt;…&lt;/svg&gt;</code>.

Design tokens: see the Tokens story under the theme section (theme/Tokens) for reference to CSS variables and token names.`,
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
