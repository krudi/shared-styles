import type { Meta, StoryObj } from '@storybook/html-vite';

import type { FontWeightsArgs } from './font-weights.types';

const meta = {
    title: 'Utilities/Font Weights',
    tags: ['autodocs'],
    render: () => `
        <h2 class="h4 mt-0">Font weights</h2>
        ${[
            { className: 'fw-300', label: '.fw-300' },
            { className: 'fw-400', label: '.fw-400' },
            { className: 'fw-500', label: '.fw-500' },
            { className: 'fw-600', label: '.fw-600' },
            { className: 'fw-700', label: '.fw-700' },
        ]
            .map(
                (utility) => `
            <p class="${utility.className} m-0">Weight sample with ${utility.label} for emphasis and hierarchy.</p>
        `
            )
            .join('')}
    `,
    parameters: {
        docs: {
            description: {
                component: 'Weight utilities for emphasis, hierarchy, and readability.',
            },
        },
    },
} satisfies Meta<FontWeightsArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Pair font weight utilities with semantic headings to fine-tune emphasis.',
            },
        },
    },
};

export const Playground: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Use weight utilities to dial in hierarchy across typographic elements.',
            },
        },
    },
};
