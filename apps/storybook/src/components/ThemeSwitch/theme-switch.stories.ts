import type { Meta, StoryObj } from '@storybook/html-vite';

import type { ThemeSwitchArgs } from './theme-switch.types';

const meta = {
    title: 'Components/ThemeSwitch',
    play: ({ canvasElement }): void => {
        const switchElement = canvasElement.querySelector<HTMLButtonElement>('button[data-theme-switch]');

        if (!switchElement?.id) {
            return;
        }

        wireThemeSwitch({ switchId: switchElement.id });
    },
    render: ({ label }: ThemeSwitchArgs, { id }): string => `
        <button
            class="btn btn-icon theme-switch"
            type="button"
            id="${id}-theme-switch"
            data-theme-switch
            data-theme-switch-state="light"
            aria-pressed="false"
            aria-label="${label}"
            title="${label}"
        >
            <span class="theme-switch-icon" data-theme-switch-icon="light" aria-hidden="true"></span>
            <span class="theme-switch-icon" data-theme-switch-icon="dark" aria-hidden="true"></span>
            <span class="sr-only">${label}</span>
        </button>
    `,
    args: {
        label: 'Toggle theme',
    },
    argTypes: {
        label: {
            control: 'text',
            description: 'Accessible label for the icon-only toggle button.',
        },
    },
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: `ThemeSwitch — purpose-driven component from the design system. Use this component for its primary role in the UI, follow the system tokens for spacing and colour, and ensure a clear accessible name is provided. Follow keyboard and screen-reader best practices when the component is interactive.

Design tokens are documented below.`,
            },
        },
    },
} satisfies Meta<ThemeSwitchArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Canonical theme switch button using the shared script helper and component styling.',
            },
        },
    },
};
