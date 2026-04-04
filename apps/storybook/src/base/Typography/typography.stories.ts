import type { Meta, StoryObj } from '@storybook/html-vite';

import type { TypographyArgs } from './typography.types';

const meta = {
    title: 'Base/Typography',
    render: (): string => `
        <h1 class="mt-0">Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
        <p class="p">Body text using base variables with comfortable line height and muted color.</p>
        <p><a href="https://example.com" target="_blank" rel="noreferrer">External link</a></p>
        <p><a href="mailto:hello@example.com">Mail link</a></p>
        <p><a href="tel:+123456789">Phone link</a></p>
    `,
    parameters: {
        docs: {
            description: {
                component: `Typography — purpose-driven component from the design system. Use this component for its primary role in the UI, follow the system tokens for spacing and colour, and ensure a clear accessible name is provided. Follow keyboard and screen-reader best practices when the component is interactive.

Design tokens are documented below.`,
            },
        },
    },
} satisfies Meta<TypographyArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'The default type ramp demonstrates semantic heading tokens, paragraph rhythm, and link typography overrides.',
            },
        },
    },
};
