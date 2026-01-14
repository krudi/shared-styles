import type { Meta, StoryObj } from '@storybook/html-vite';

import type { GridArgs } from './grid.types';

const meta = {
    title: 'Layout/Grid',
    tags: ['autodocs'],
    render: (): string => `
        <h2 class="h4 mt-0">Grid</h2>
        <div class="container">
            <div class="row">
                <div class="col-3">.col-3</div>
                <div class="col-3">.col-3</div>
                <div class="col-3">.col-3</div>
                <div class="col-3">.col-3</div>
                <div class="col-6">.col-6</div>
                <div class="col-6">.col-6</div>
                <div class="col-12">.col-12</div>
            </div>
            <p class="mt-2 text-gray mb-0">Columns reflow to full width on smaller breakpoints for effortless responsive layouts.</p>
        </div>
    `,
    parameters: {
        docs: {
            description: {
                component: 'Grid helpers for responsive page composition.',
            },
        },
    },
} satisfies Meta<GridArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Compose <code>.row</code> and <code>.col-*</code> classes to create responsive layouts.',
            },
        },
    },
};

export const Playground: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Use grid utilities to prototype responsive column layouts quickly.',
            },
        },
    },
};
