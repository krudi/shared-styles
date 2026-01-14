import type { Meta, StoryObj } from '@storybook/html-vite';

import type { SkeletonArgs } from './skeleton.types';

const meta = {
    title: 'Components/Skeleton',
    tags: ['autodocs'],
    render: ({ lines }: SkeletonArgs): string => `
        ${Array.from({ length: Math.max(1, Math.min(lines, 6)) })
            .map(() => `<span class="skeleton-line"></span>`)
            .join('')}
    `,
    args: {
        lines: 3,
    },
    argTypes: {
        lines: { control: { type: 'number', min: 1, max: 6, step: 1 } },
    },
    parameters: {
        docs: {
            description: {
                component:
                    'Skeleton loaders for placeholder states. Keep layouts stable while data fetches by matching final content structure with configurable widths.',
            },
        },
    },
} satisfies Meta<SkeletonArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Canonical skeleton example with three lines.',
            },
        },
    },
};

export const Playground: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Increase the line count to preview stacked loading placeholders.',
            },
        },
    },
};
