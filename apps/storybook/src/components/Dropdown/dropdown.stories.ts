import type { Meta, StoryObj } from '@storybook/html-vite';

import type { DropdownArgs } from './dropdown.types';

const meta = {
    title: 'Components/Dropdown',
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
                component: `Dropdown — purpose-driven component from the design system. Use this component for its primary role in the UI, follow the system tokens for spacing and colour, and ensure a clear accessible name is provided. Follow keyboard and screen-reader best practices when the component is interactive.

Design tokens are documented below.`,
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
