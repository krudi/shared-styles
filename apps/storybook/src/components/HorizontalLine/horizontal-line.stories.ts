import type { Meta, StoryObj } from '@storybook/html-vite';

import type { HorizontalLineArgs } from './horizontal-line.types';

const meta = {
    title: 'Components/Horizontal Line',
    tags: ['autodocs'],
    render: ({ beforeText, afterText }: HorizontalLineArgs): string => `
        <p>${beforeText}</p>
        <hr class="hr" />
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
                component:
                    'Single-purpose horizontal rule styled via tokens. Use <code>.hr</code> on an <code>&lt;hr&gt;</code> element.',
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

export const Playground: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Adjust the copy around the divider to preview layout and rhythm.',
            },
        },
    },
};
