import type { Meta, StoryObj } from '@storybook/html-vite';

const meta = {
    title: 'Components/Skip Link',
    render: (): string => `
        <a class="skip-link" href="#main-content">Skip to main content</a>
        <a class="skip-link" href="#main-navigation">Skip to navigation</a>
        <p>Press <kbd>Tab</kbd> to reveal the skip links. They stay hidden until they receive keyboard focus.</p>
        <nav id="main-navigation" aria-label="Main">
            <a href="#services">Services</a>
        </nav>
        <main id="main-content" tabindex="-1">
            <h1>Main content</h1>
        </main>
    `,
    parameters: {
        layout: 'padded',
        controls: { disable: true },
        docs: {
            description: {
                component: `Skip Link — lets keyboard and screen-reader users jump past repeated blocks such as the header and navigation. Place the links as the first focusable elements in \`body\`, point each at an element with an \`id\` and \`tabindex="-1"\`, and keep the label short and literal. The link is moved off-screen with a transform, so it stays in the accessibility tree and slides into view on focus.

Design tokens are documented below.`,
            },
        },
    },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
