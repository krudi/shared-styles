import type { Meta, StoryObj } from '@storybook/html-vite';

const meta = {
    title: 'Utilities/Background Colors',
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
                component: `Background Colors — purpose-driven component from the design system. Use this component for its primary role in the UI, follow the system tokens for spacing and colour, and ensure a clear accessible name is provided. Follow keyboard and screen-reader best practices when the component is interactive.

Design tokens: see the Tokens story under the theme section (theme/Tokens) for reference to CSS variables and token names.`,
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
