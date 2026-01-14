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
                    'Dropdown built on native <code>popover</code> with anchor positioning. Content panel uses tokenised width, spacing, borders, and z-index. Rotate icon on open.',
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
