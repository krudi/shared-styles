import type { Meta, StoryObj } from '@storybook/html-vite';

import type { GridArgs } from './grid.types';

const meta = {
    title: 'Layout/Grid',
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
            <div class="row mt-2">
                <div class="col-4 col-start bg-white-100" style="min-height: 6rem;">.col-start</div>
                <div class="col-4 col-center bg-white-200" style="min-height: 6rem;">.col-center</div>
                <div class="col-4 col-end bg-white-300" style="min-height: 6rem;">.col-end</div>
            </div>
            <p class="mt-2 text-gray mb-0">Columns reflow to full width on smaller breakpoints for effortless responsive layouts.</p>
        </div>
    `,
    parameters: {
        docs: {
            description: {
                component: `Grid — purpose-driven component from the design system. Use this component for its primary role in the UI, follow the system tokens for spacing and colour, and ensure a clear accessible name is provided. Follow keyboard and screen-reader best practices when the component is interactive.

Design tokens are documented below.`,
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
