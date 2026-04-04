import type { Meta, StoryObj } from '@storybook/html-vite';

import type { CardArgs } from './card.types';

const imageUrl = 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80';

const meta = {
    title: 'Components/Card',
    render: ({ subtitle, title, description, variant, showMedia, showFooter }: CardArgs): string => `
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
                    <p class="card-header-subtitle">${subtitle}</p>
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
        subtitle: 'Featured',
        title: 'Flexible content card',
        description:
            'Cards group media, copy, and actions into a single reusable container for listings, teasers, and dashboards.',
        variant: 'white',
        showMedia: true,
        showFooter: true,
    },
    argTypes: {
        subtitle: { control: 'text' },
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
                component: `Card — purpose-driven component from the design system. Use this component for its primary role in the UI, follow the system tokens for spacing and colour, and ensure a clear accessible name is provided. Follow keyboard and screen-reader best practices when the component is interactive. Example markup: <code>&lt;section&gt;…&lt;/section&gt;</code>.

Design tokens are documented below.`,
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

export const White = {
    args: { variant: 'white' },
    parameters: {
        controls: { disable: true },
        docs: { description: { story: 'White variant — shows the white appearance.' } },
    },
};

export const Primary = {
    args: { variant: 'primary' },
    parameters: {
        controls: { disable: true },
        docs: { description: { story: 'Primary variant — shows the primary appearance.' } },
    },
};

export const Secondary = {
    args: { variant: 'secondary' },
    parameters: {
        controls: { disable: true },
        docs: { description: { story: 'Secondary variant — shows the secondary appearance.' } },
    },
};
