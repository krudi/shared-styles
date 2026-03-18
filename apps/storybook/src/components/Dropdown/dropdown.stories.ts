import type { Meta, StoryObj } from '@storybook/html-vite';

import type { DropdownArgs } from './dropdown.types';

const meta = {
    title: 'Components/Dropdown',
    tags: ['autodocs'],
    render: ({ label, items }: DropdownArgs): string => `
        <div class="dropdown">
            <button class="dropdown-trigger" popovertarget="dropdown-playground" aria-haspopup="menu" aria-expanded="false">
                ${label}
                <span class="dropdown-summary-icon" aria-hidden="true"></span>
            </button>
    
            <ul id="dropdown-playground" class="dropdown-list" role="menu" aria-label="${label}" popover>
                ${items
                    .map(
                        (item) =>
                            `<li class="dropdown-list-item"><a class="dropdown-list-item-link" role="menuitem" href="#${item.toLowerCase().replace(/\s+/g, '-')}">${item}</a></li>`
                    )
                    .join('')}
            </ul>
        </div>
    `,
    args: {
        label: 'Options',
        items: ['Profile', 'Settings', 'Log out'],
    },
    argTypes: {
        label: { control: 'text' },
        items: { control: 'object' },
    },
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component:
                    'Dropdown built on native <code>popover</code> with anchor positioning. Canonical markup uses <code>.dropdown</code>, a <code>button.dropdown-trigger</code>, and a <code>ul.dropdown-list</code> with <code>a.dropdown-list-item-link</code> entries. Focus-visible state is applied to both the trigger and menu items.',
            },
        },
    },
} satisfies Meta<DropdownArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Canonical dropdown example with default items.',
            },
        },
    },
};

export const Playground: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Use the controls to swap the trigger text and menu items.',
            },
        },
    },
};

export const WithCurrentItem: Story = {
    render: (): string => `
        <div class="dropdown">
            <button class="dropdown-trigger" popovertarget="dropdown-current" aria-haspopup="menu" aria-expanded="true" type="button">
                Sections
                <span class="dropdown-summary-icon" aria-hidden="true"></span>
            </button>
            <ul id="dropdown-current" class="dropdown-list" role="menu" aria-label="Sections" popover open>
                <li class="dropdown-list-item">
                    <a class="dropdown-list-item-link" role="menuitem" href="#overview">Overview</a>
                </li>
                <li class="dropdown-list-item">
                    <a class="dropdown-list-item-link" role="menuitem" href="#components" aria-current="page">Components</a>
                </li>
                <li class="dropdown-list-item">
                    <a class="dropdown-list-item-link" role="menuitem" href="#tokens">Tokens</a>
                </li>
            </ul>
        </div>
    `,
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Current-page state example. Use <code>aria-current="page"</code> on the active destination instead of inventing a custom active class.',
            },
        },
    },
};
