import type { Meta, StoryObj } from '@storybook/html-vite';

const meta = {
    title: 'Utilities/Visibility',
    tags: ['autodocs'],
    render: (): string => `
        <div style="display: grid; gap: var(--spacer);">
            <div class="bg-white-100">
                <span class="sr-only">Screen reader only label</span>
                <span aria-hidden="true">Visible label (sr-only text hidden)</span>
            </div>
        </div>
    `,
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                component: 'Utilities for content visibility and screen reader-only text.',
            },
        },
    },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
