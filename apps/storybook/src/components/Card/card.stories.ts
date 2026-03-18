import type { Meta, StoryObj } from '@storybook/html-vite';

import type { CardArgs } from './card.types';

const imageUrl = 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80';

const meta = {
    title: 'Components/Card',
    tags: ['autodocs'],
    render: ({ eyebrow, title, description, variant, showMedia, showFooter }: CardArgs): string => `
        <article class="card card-${variant}" style="max-width: 24rem;">
            ${
                showMedia
                    ? `<figure class="card-media">
                        <img src="${imageUrl}" alt="Sample modern house exterior with warm evening lighting" loading="lazy" />
                    </figure>`
                    : ''
            }
            <div class="card-content">
                <div class="card-content-header">
                    <p class="card-header-subtitle">${eyebrow}</p>
                    <h3 class="card-header-title">${title}</h3>
                </div>
                <div class="card-content-body">
                    <p class="card-content-body-description">${description}</p>
                </div>
                ${
                    showFooter
                        ? `<div class="card-content-footer">
                            <div class="card-footer-actions">
                                <a class="btn btn-default" href="#">View details</a>
                                <a class="btn btn-outline" href="#">Bookmark</a>
                            </div>
                        </div>
                        `
                        : ''
                }
            </div>
        </article>
    `,
    args: {
        eyebrow: 'Featured',
        title: 'Flexible content card',
        description:
            'Cards group media, copy, and actions into a single reusable container for listings, teasers, and dashboards.',
        variant: 'white',
        showMedia: true,
        showFooter: true,
    },
    argTypes: {
        eyebrow: { control: 'text' },
        title: { control: 'text' },
        description: { control: 'text' },
        variant: {
            control: 'select',
            options: ['white', 'primary', 'secondary'],
        },
        showMedia: { control: 'boolean' },
        showFooter: { control: 'boolean' },
    },
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component:
                    'Card container for grouped media, headings, body copy, and actions. Use <code>.card</code> with optional <code>.card-header</code>, <code>.card-body</code>, <code>.card-footer</code>, and <code>.card-media</code> sections.',
            },
        },
    },
} satisfies Meta<CardArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Canonical card example with media, content, and actions.',
            },
        },
    },
};

export const Playground: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Use the controls to preview the supported card variants and optional sections.',
            },
        },
    },
};
