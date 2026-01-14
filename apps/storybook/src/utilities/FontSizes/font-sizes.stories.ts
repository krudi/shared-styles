import type { Meta, StoryObj } from '@storybook/html-vite';

import type { FontSizesArgs } from './font-sizes.types';

const meta = {
    title: 'Utilities/Font Sizes',
    tags: ['autodocs'],
    render: () => `
        <h2 class="h4 mt-0">Font sizing</h2>
        ${[
            { className: 'text-xs', label: '.text-xs' },
            { className: 'text-sm', label: '.text-sm' },
            { className: 'text-md', label: '.text-md' },
            { className: 'text-lg', label: '.text-lg' },
            { className: 'text-xl', label: '.text-xl' },
        ]
            .map(
                (utility) => `
            <p class="${utility.className} m-0">Scale text with ${utility.label} while inheriting the base font family and weight.</p>
        `
            )
            .join('')}
    `,
    parameters: {
        docs: {
            description: {
                component: 'Quick size adjustments that map to the typography scale.',
            },
        },
    },
} satisfies Meta<FontSizesArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Use these scale helpers for quick typography adjustments while keeping the base font family.',
            },
        },
    },
};

export const Playground: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Font size helpers stay aligned with the type ramp for consistent hierarchy.',
            },
        },
    },
};
