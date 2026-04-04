import type { Meta, StoryObj } from '@storybook/html-vite';

import type { PricingTableArgs } from './pricing-table.types';

const renderCard = ({ subtitle, title, description, price, buttonLabel, featured }: PricingTableArgs): string => `
    <article class="pricing-table-card${featured ? ' pricing-table-card-featured' : ''}" style="max-width: 24rem;">
        <div class="pricing-table-card-accent"></div>
        <div class="pricing-table-card-content">
            <header class="pricing-table-card-header">
                <p class="pricing-table-card-subtitle">${subtitle}</p>
                <h3 class="pricing-table-card-title">${title}</h3>
                <div class="pricing-table-card-description">
                    <p>${description}</p>
                </div>
            </header>
            <div class="pricing-table-card-footer">
                <p class="pricing-table-card-price">${price}</p>
                <a class="btn btn-default pricing-table-card-button" href="#">${buttonLabel}</a>
            </div>
        </div>
    </article>
`;

const meta = {
    title: 'Components/Pricing Table',
    render: (args: PricingTableArgs): string => renderCard(args),
    args: {
        subtitle: 'Starter workflow',
        title: 'Free Trial',
        description:
            'Explore the full setup with reusable components, editor-friendly defaults, and a low-friction way to validate your first build.',
        price: 'Free',
        buttonLabel: 'Start free trial',
        featured: false,
    },
    argTypes: {
        subtitle: { control: 'text' },
        title: { control: 'text' },
        description: { control: 'text' },
        price: { control: 'text' },
        buttonLabel: { control: 'text' },
        featured: { control: 'boolean' },
    },
    parameters: {
        designTokens: ['Components/Card', 'Components/Pricing Table'],
        layout: 'padded',
        docs: {
            description: {
                component: `Pricing Table — purpose-driven component from the design system. Use this component for its primary role in the UI, follow the system tokens for spacing and colour, and ensure a clear accessible name is provided. Follow keyboard and screen-reader best practices when the component is interactive.

Design tokens are documented below.`,
            },
        },
    },
} satisfies Meta<PricingTableArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Canonical single pricing card with default spacing, accent bar, and full-width action.',
            },
        },
    },
};
