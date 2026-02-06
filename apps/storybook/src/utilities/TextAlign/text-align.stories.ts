import type { Meta, StoryObj } from '@storybook/html-vite';

const meta = {
    title: 'Utilities/TextAlign',
    tags: ['autodocs'],
    render: (): string => `
        <div style="display: grid; gap: var(--spacer);">
            <div class="bg-white-100 text-left">.text-left</div>
            <div class="bg-white-100 text-center">.text-center</div>
            <div class="bg-white-100 text-right">.text-right</div>
            <div class="bg-white-100 text-justify">
                .text-justify: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
            </div>
        </div>
    `,
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                component: 'Text alignment utilities.',
            },
        },
    },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
