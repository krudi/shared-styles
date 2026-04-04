import type { Meta, StoryObj } from '@storybook/html-vite';

import type { HorizontalLineArgs } from './horizontal-line.types';

const meta = {
    title: 'Components/Horizontal Line',
    render: ({ beforeText, afterText }: HorizontalLineArgs): string => `
        <p>${beforeText}</p>
        <hr class="hr" role="presentation" />
        <p>${afterText}</p>
    `,
    args: {
        beforeText: 'Sections can be separated with the design-token-driven horizontal rule.',
        afterText: 'Use supporting copy to explain what comes next.',
    },
    argTypes: {
        beforeText: { control: 'text' },
        afterText: { control: 'text' },
    },
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: `Horizontal Line — purpose-driven component from the design system. Use this component for its primary role in the UI, follow the system tokens for spacing and colour, and ensure a clear accessible name is provided. Follow keyboard and screen-reader best practices when the component is interactive.

Design tokens are documented below.`,
            },
        },
    },
} satisfies Meta<HorizontalLineArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Canonical horizontal rule example with supporting text.',
            },
        },
    },
};
