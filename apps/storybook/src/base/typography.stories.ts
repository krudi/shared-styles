import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
    title: 'Base/Typography',
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Headings, paragraphs, and link treatments driven by the base type scale and link variables.',
            },
        },
    },
};
export default meta;

const Template = () => `
    <main class="main" style="padding: var(--spacer-3); display: grid; gap: var(--spacer-1);">
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
    </main>
`;

type Story = StoryObj;

export const Default: Story = {
    render: Template,
    parameters: {
        docs: {
            description: {
                story: 'The default type ramp demonstrates automatic margins, link affordances, and heading font family overrides.',
            },
        },
    },
};
