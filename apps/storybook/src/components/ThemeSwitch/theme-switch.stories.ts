import { wireThemeSwitch } from '@krudi/styles/js';
import type { Meta, StoryObj } from '@storybook/html-vite';

import type { ThemeSwitchArgs } from './theme-switch.types';

const meta = {
    title: 'Components/ThemeSwitch',
    tags: ['autodocs'],
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
                component:
                    'Theme switch built on <code>.btn.btn-icon</code> and <code>.theme-switch</code>. Use the exported <code>wireThemeSwitch()</code> helper from <code>@krudi/styles/js</code> to toggle the root <code>.dark</code> class while keeping a single manual <code>aria-label</code> on the button.',
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
