import type { Meta, StoryObj } from '@storybook/html-vite';

import type { BreadcrumbArgs } from './breadcrumb.types';

const meta = {
    title: 'Components/Breadcrumb',
    render: ({ ariaLabel, items, current }: BreadcrumbArgs): string => `
        <nav class="breadcrumb" aria-label="${ariaLabel}">
            <ol class="breadcrumb-list">
                ${items
                    .map(
                        (item) => `
                            <li class="breadcrumb-list-item">
                                <a class="breadcrumb-list-item-link" href="${item.href}">${item.label}</a>
                            </li>
                        `
                    )
                    .join('')}
                <li class="breadcrumb-list-item">
                    <span aria-current="page">${current}</span>
                </li>
            </ol>
        </nav>
    `,
    args: {
        ariaLabel: 'Breadcrumb',
        items: [
            { href: '#home', label: 'Home' },
            { href: '#services', label: 'Services' },
            { href: '#permits', label: 'Permits and licences' },
        ],
        current: 'Apply for a parking permit',
    },
    argTypes: {
        ariaLabel: { control: 'text' },
        items: { control: 'object' },
        current: { control: 'text' },
    },
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: `Breadcrumb — shows where the current page sits in the site hierarchy. Use an ordered list inside a \`nav\` with an accessible name, link every ancestor and mark the current page with \`aria-current="page"\` instead of a link. The separator is decorative CSS content, so screen readers announce only the list items.

Design tokens are documented below.`,
            },
        },
    },
} satisfies Meta<BreadcrumbArgs>;

export default meta;

type Story = StoryObj<BreadcrumbArgs>;

export const Default: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Three ancestors and the current page.',
            },
        },
    },
};

export const Short: Story = {
    args: {
        items: [{ href: '#home', label: 'Home' }],
        current: 'Contact',
    },
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'A page one level below the start page.',
            },
        },
    },
};
