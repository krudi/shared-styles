import type { Meta, StoryObj } from '@storybook/html-vite';

const meta = {
    title: 'Utilities/Text Decoration',
    render: () => `
        <h2 class="h4 mt-0">Text decoration</h2>
        ${[
            { className: 'text-decoration-none', label: '.text-decoration-none' },
            { className: 'text-decoration-underline', label: '.text-decoration-underline' },
            { className: 'text-decoration-line-through', label: '.text-decoration-line-through' },
            { className: 'text-decoration-wavy', label: '.text-decoration-wavy' },
        ]
            .map(
                (utility) => `
            <p class="${utility.className} m-0">Utility sample ${utility.label} on inline text.</p>
        `
            )
            .join('')}
    `,
    parameters: {
        docs: {
            description: {
                component: `Text Decoration — purpose-driven component from the design system. Use this component for its primary role in the UI, follow the system tokens for spacing and colour, and ensure a clear accessible name is provided. Follow keyboard and screen-reader best practices when the component is interactive.

Design tokens: see the Tokens story under the theme section (theme/Tokens) for reference to CSS variables and token names.`,
            },
        },
    },
} satisfies Meta<TextDecorationArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Decoration helpers are ideal for inline emphasis without custom CSS.',
            },
        },
    },
};
