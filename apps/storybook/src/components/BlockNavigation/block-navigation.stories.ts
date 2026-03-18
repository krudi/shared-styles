import type { Meta, StoryObj } from '@storybook/html-vite';

import type { BlockNavigationArgs } from './block-navigation.types';

const meta = {
    title: 'Components/Block Navigation',
    tags: ['autodocs'],
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
                component:
                    'Semantic block navigation built with <code>nav</code>, <code>ul</code>, <code>li</code>, and a full-tile <code>a</code>. Use <code>.block-navigation</code>, <code>.block-navigation-list</code>, <code>.block-navigation-list-item</code>, <code>.block-navigation-list-item-link</code>, and <code>.block-navigation-list-item-text</code>.',
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
                story:
                    'Use this for page-overview navigation where each destination needs a large clickable block that matches the current component styling.',
            },
        },
    },
};

export const Playground: Story = {
    parameters: {
        docs: {
            description: {
                story:
                    'Adjust the labels and href values to mirror your page structure. Keep the link on the <code>a</code> so the full block remains clickable.',
            },
        },
    },
};
