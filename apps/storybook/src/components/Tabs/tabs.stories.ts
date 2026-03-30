import { wireTabs } from '@krudi/styles/js';
import type { Meta, StoryObj } from '@storybook/html-vite';

import type { TabsArgs, TabsItem } from './tabs.types';

const defaultItems: TabsItem[] = [
    {
        id: 'overview',
        label: 'Overview',
        title: 'Start with a clean implementation baseline',
        description:
            'Use tabs for compact content groups like feature overviews, pricing explanations, onboarding steps, or documentation summaries.',
    },
    {
        id: 'features',
        label: 'Features',
        title: 'Keep related details together without long scrolling',
        description:
            'The shared tabs style fits product pages and dashboard-style interfaces where users switch between a few clearly named content sections.',
    },
    {
        id: 'support',
        label: 'Support',
        title: 'Pair with your own behavior layer when interaction is needed',
        description:
            'This first shared version focuses on the canonical visual structure. You can attach your preferred JS or framework logic to switch the active trigger and panel.',
    },
];

const renderTabs = ({ activeTab, items }: TabsArgs, storyId = 'tabs'): string => {
    const activeId = items.some((item) => item.id === activeTab) ? activeTab : items[0]?.id;

    return `
        <section class="tabs" id="${storyId}-tabs" data-tabs aria-label="Component tabs">
            <div class="tabs-list" role="tablist" aria-label="Component tabs">
                ${items
                    .map(
                        (item) => `
                            <button
                                class="tabs-trigger${item.id === activeId ? ' is-active' : ''}"
                                id="${storyId}-tab-${item.id}"
                                role="tab"
                                type="button"
                                aria-selected="${item.id === activeId ? 'true' : 'false'}"
                                aria-controls="${storyId}-panel-${item.id}"
                                tabindex="${item.id === activeId ? '0' : '-1'}"
                            >
                                ${item.label}
                            </button>
                        `
                    )
                    .join('')}
            </div>
            <div class="tabs-panels">
                ${items
                    .map(
                        (item) => `
                            <article
                                class="tabs-panel${item.id === activeId ? ' is-active' : ''}"
                                id="${storyId}-panel-${item.id}"
                                role="tabpanel"
                                aria-labelledby="${storyId}-tab-${item.id}"
                                ${item.id === activeId ? '' : 'hidden'}
                            >
                                <h3 class="tabs-panel-title">${item.title}</h3>
                                <p class="tabs-panel-description">${item.description}</p>
                            </article>
                        `
                    )
                    .join('')}
            </div>
        </section>
    `;
};

const meta = {
    title: 'Components/Tabs',
    tags: ['autodocs'],
    play: ({ canvasElement }): void => {
        const root = canvasElement.querySelector<HTMLElement>('[data-tabs]');

        if (!root) {
            return;
        }

        wireTabs({ root });
    },
    render: (args: TabsArgs, { id }): string => renderTabs(args, id),
    args: {
        activeTab: 'overview',
        items: defaultItems,
    },
    argTypes: {
        activeTab: {
            control: 'select',
            options: defaultItems.map((item) => item.id),
            description: 'Tab id that should be shown as active in the static preview',
        },
        items: {
            control: 'object',
            description: 'Ordered tab items with matching labels and panel content',
        },
    },
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component:
                    'Tabs for compact content switching with a canonical structure of <code>.tabs</code>, <code>.tabs-list</code>, <code>.tabs-trigger</code>, and <code>.tabs-panel</code>. Use the exported <code>wireTabs()</code> helper from <code>@krudi/styles/js</code> for keyboard navigation, roving tabindex, and ARIA state syncing.',
            },
        },
    },
} satisfies Meta<TabsArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Canonical tabs example with one active trigger and matching panel.',
            },
        },
    },
};

export const Playground: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Switch the active tab or replace the labels/content to preview common documentation and product-page use cases.',
            },
        },
    },
};
