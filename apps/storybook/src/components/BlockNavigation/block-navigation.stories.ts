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
                    'Semantic block navigation built with <code>nav</code>, <code>ul</code>, <code>li</code>, and a full-tile <code>a</code>. Canonical structure: <code>nav.block-navigation &gt; ul.block-navigation-list &gt; li.block-navigation-list-item &gt; a.block-navigation-list-item-link &gt; span.block-navigation-list-item-text</code>.',
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

export const CompactSet: Story = {
    render: (): string => `
        <nav class="block-navigation" aria-label="Module navigation">
            <ul class="block-navigation-list">
                <li class="block-navigation-list-item">
                    <a href="#content" class="block-navigation-list-item-link">
                        <span class="block-navigation-list-item-text">Content</span>
                    </a>
                </li>
                <li class="block-navigation-list-item">
                    <a href="#media" class="block-navigation-list-item-link">
                        <span class="block-navigation-list-item-text">Media</span>
                    </a>
                </li>
                <li class="block-navigation-list-item">
                    <a href="#forms" class="block-navigation-list-item-link">
                        <span class="block-navigation-list-item-text">Forms</span>
                    </a>
                </li>
                <li class="block-navigation-list-item">
                    <a href="#navigation" class="block-navigation-list-item-link">
                        <span class="block-navigation-list-item-text">Navigation</span>
                    </a>
                </li>
            </ul>
        </nav>
    `,
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Compact reference set for overview pages. The whole tile remains clickable, while the text element is reserved for typography only.',
            },
        },
    },
};
