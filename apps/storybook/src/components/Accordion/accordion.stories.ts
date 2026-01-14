import type { Meta, StoryObj } from '@storybook/html-vite';

import type { AccordionArgs } from './accordion.types';

const meta = {
    title: 'Components/Accordion',
    tags: ['autodocs'],
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
        title: 'What is included?',
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
                component:
                    'Accordion built on native details with tokenised spacing, borders, and typography. Icons rotate on open via the summary modifier.',
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

export const Playground: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Adjust the summary and body copy; toggle open state to preview the chevron rotation and spacing.',
            },
        },
    },
};
