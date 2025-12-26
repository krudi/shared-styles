import type { Meta, StoryObj } from '@storybook/html-vite';
import { userEvent, within } from 'storybook/test';
import { badgeVariants, buildBadgeCard, buildInlineUsage, type BadgeVariant } from './helpers';

const meta: Meta = {
    title: 'Components/Badges',
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component:
                    'Status and taxonomy chips built on the design token radius, padding, and font sizing. Variants align to the theme palette.',
            },
        },
    },
};

export default meta;

type Story = StoryObj;

const layoutTemplate = () => `
    <main class="main" style="padding: var(--spacer-3); display: grid; gap: var(--spacer-2); grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));">
        ${buildBadgeCard()}
        ${buildInlineUsage()}
    </main>
`;

export const Variants: Story = {
    name: 'Badge variants',
    render: layoutTemplate,
    parameters: {
        docs: {
            description: {
                story: 'Use hue-specific classes (<code>.badge-primary</code>, <code>.badge-danger</code>, etc.) to convey status while keeping consistent shape and typography.',
            },
        },
    },
};

export const Playground: Story = {
    name: 'Badge playground (controls + action)',
    args: {
        label: 'Notify',
        variant: 'primary' as BadgeVariant,
    },
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: badgeVariants.map((badge) => badge.className.replace('badge-', '')),
        },
        label: { control: 'text' },
        onClick: { action: 'badge clicked' },
    },
    render: ({ label, variant, onClick }) => {
        const wrapper = document.createElement('div');
        wrapper.style.display = 'flex';
        wrapper.style.padding = 'var(--spacer-3)';
        wrapper.style.gap = 'var(--spacer-1)';
        wrapper.innerHTML = `<button type="button" class="badge badge-${variant}" style="border: none; cursor: pointer;">${label}</button>`;
        const button = wrapper.querySelector('button');
        if (button && typeof onClick === 'function') {
            button.addEventListener('click', onClick);
        }
        return wrapper;
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const button = canvas.getByRole('button', { name: /notify/i });
        await userEvent.click(button);
    },
    parameters: {
        docs: {
            description: {
                story: 'Use the controls to toggle label and variant. Click the badge to see the action log in the Actions panel; the play function validates click wiring.',
            },
        },
    },
};
