import type { Meta, StoryObj } from '@storybook/html-vite';

import type { TypographyArgs } from './typography.types';

const meta = {
    title: 'Base/Typography',
    tags: ['autodocs'],
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
                component:
                    'Headings, paragraphs, and link treatments driven by the base type scale and link variables.',
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
                story: 'The default type ramp demonstrates automatic margins, link affordances, and heading font family overrides.',
            },
        },
    },
};

export const Playground: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Review headings, body text, and link styles together for hierarchy checks.',
            },
        },
    },
};
