import type { Meta, StoryObj } from '@storybook/html-vite';

import type { BackgroundColorsArgs } from './background-colors.types';

const meta = {
    title: 'Utilities/Background Colors',
    tags: ['autodocs'],
    render: () => `
        <h2 class="h4 mt-0">Background colors</h2>
        <div class="row">
            ${[
                { className: 'bg-white', label: '.bg-white' },
                { className: 'bg-white-100', label: '.bg-white-100' },
                { className: 'bg-white-200', label: '.bg-white-200' },
                { className: 'bg-black', label: '.bg-black' },
                { className: 'bg-gray', label: '.bg-gray' },
                { className: 'bg-secondary', label: '.bg-secondary' },
            ]
                .map(
                    (utility) => `
                <div class="col-3">
                    <div class="${utility.className} p-2">${utility.label}</div>
                </div>
            `
                )
                .join('')}
        </div>
    `,
    parameters: {
        docs: {
            description: {
                component: 'Background color utilities with built-in contrast emphasis for text.',
            },
        },
    },
} satisfies Meta<BackgroundColorsArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Background utilities include built-in text emphasis colors to preserve contrast.',
            },
        },
    },
};

export const Playground: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Use background helpers for quick surface emphasis in layouts.',
            },
        },
    },
};
