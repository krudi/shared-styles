import type { Meta, StoryObj } from '@storybook/html-vite';

const meta = {
    title: 'Utilities/Layout',
    tags: ['autodocs'],
    render: (): string => `
        <div style="display: grid; gap: var(--spacer);">
            <div class="row" style="gap: var(--spacer-n2);">
                <div class="col-4 bg-white-100">.row</div>
                <div class="col-4 bg-white-100">.col-4</div>
                <div class="col-4 bg-white-100">grid columns</div>
            </div>
        </div>
    `,
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                component: 'Layout utilities for grid rows and columns.',
            },
        },
    },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
