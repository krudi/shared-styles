import type { Meta, StoryObj } from '@storybook/html-vite';

import type { BlockNavigationArgs } from './block-navigation.types';

const meta = {
    title: 'Components/Block Navigation',
    render: ({ ariaLabel, items }: BlockNavigationArgs): string => `
        <nav class="block-navigation" aria-label="${ariaLabel}">
            <ul class="block-navigation-list">
                ${items
                    .map(
                        (item) => `
                            <li class="block-navigation-list-item">
                                <a href="${item.href}" class="block-navigation-list-item-link">
                                    <span class="block-navigation-list-item-text">${item.label}</span>
                                </a>
                            </li>
                        `
                    )
                    .join('')}
            </ul>
        </nav>
    `,
    args: {
        ariaLabel: 'Content navigation',
        items: [
            { href: '#bildmodule', label: 'Bildmodule' },
            { href: '#audio-video', label: 'Audio & Video' },
            { href: '#textmodule', label: 'Textmodule' },
            { href: '#slideshow', label: 'Slideshow' },
            { href: '#ueberschriften', label: 'Überschriften' },
            { href: '#dateilinks-glossar', label: 'Dateilinks & Glossar' },
            { href: '#einzelteaser', label: 'Einzelteaser' },
            { href: '#akkordeon-tabnavigation', label: 'Akkordeon & Tabnavigation' },
        ],
    },
    argTypes: {
        ariaLabel: { control: 'text' },
        items: { control: 'object' },
    },
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: `Block Navigation — purpose-driven component from the design system. Use this component for its primary role in the UI, follow the system tokens for spacing and colour, and ensure a clear accessible name is provided. Follow keyboard and screen-reader best practices when the component is interactive.

Design tokens are documented below.`,
            },
        },
    },
} satisfies Meta<BlockNavigationArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Use this for page-overview navigation where each destination needs a large clickable block that matches the current component styling.',
            },
        },
    },
};
