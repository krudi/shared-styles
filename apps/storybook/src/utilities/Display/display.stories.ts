import type { Meta, StoryObj } from '@storybook/html-vite';

const meta = {
    title: 'Utilities/Display',
    tags: ['autodocs'],
    render: (): string => `
        <div style="display: grid; gap: var(--spacer);">
            <div class="d-block bg-white-100">.d-block</div>
            <div class="d-inline bg-white-100">.d-inline</div>
            <div class="d-inline-block bg-white-100">.d-inline-block</div>
            <div class="d-flex" style="gap: var(--spacer-n2);">
                <div class="bg-white-100">.d-flex</div>
                <div class="bg-white-200">item</div>
            </div>
            <div class="d-grid" style="gap: var(--spacer-n2);">
                <div class="bg-white-100">.d-grid</div>
                <div class="bg-white-200">item</div>
            </div>
        </div>
    `,
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                component: 'Display utilities for inline, block, flex, and grid layouts.',
            },
        },
    },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
