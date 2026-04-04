import type { Meta, StoryObj } from '@storybook/html-vite';

import type { AccordionArgs } from './accordion.types';

const meta = {
    title: 'Components/Accordion',
    render: ({ title, content, open }: AccordionArgs): string => `
        <div class="accordion">
            <details class="accordion-details" ${open ? 'open' : ''}>
                <summary class="accordion-summary">
                    <span class="accordion-summary-title">${title}</span>
                    <span class="accordion-summary-icon dropdown-summary-icon" aria-hidden="true"></span>
                </summary>
                <div class="accordion-content">
                    <p class="accordion-content-text">${content}</p>
                </div>
            </details>
        </div>
    `,
    args: {
        content: 'Token-based spacing, borders, and typography. Extend with your own content inside the content block.',
        open: true,
    },
    argTypes: {
        title: { control: 'text' },
        content: { control: 'text' },
        open: { control: 'boolean' },
    },
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: `Accordion — purpose-driven component from the design system. Use this component for its primary role in the UI, follow the system tokens for spacing and colour, and ensure a clear accessible name is provided. Follow keyboard and screen-reader best practices when the component is interactive.

Design tokens are documented below.`,
            },
        },
    },
} satisfies Meta<AccordionArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Canonical accordion example with default spacing and typography.',
            },
        },
    },
};

export const Group: Story = {
    render: (): string => `
        <div class="accordion">
            <details class="accordion-details" open>
                <summary class="accordion-summary">
                    <span class="accordion-summary-title">Overview</span>
                    <span class="accordion-summary-icon dropdown-summary-icon" aria-hidden="true"></span>
                </summary>
                <div class="accordion-content">
                    <p class="accordion-content-text">Use the open item to reveal the content region while preserving keyboard access through the summary element.</p>
                </div>
            </details>
            <details class="accordion-details">
                <summary class="accordion-summary">
                    <span class="accordion-summary-title">Implementation</span>
                    <span class="accordion-summary-icon dropdown-summary-icon" aria-hidden="true"></span>
                </summary>
                <div class="accordion-content">
                    <p class="accordion-content-text">Additional sections follow the same structure and inherit the same border and focus behavior.</p>
                </div>
            </details>
        </div>
    `,
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Grouped accordion reference showing the canonical repeated details structure.',
            },
        },
    },
};
