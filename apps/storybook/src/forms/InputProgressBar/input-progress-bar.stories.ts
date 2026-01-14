import type { Meta, StoryObj } from '@storybook/html-vite';

import type { InputProgressBarArgs } from './input-progress-bar.types';

const meta = {
    title: 'Forms/Input Progress Bar',
    tags: ['autodocs'],
    render: ({ value, max }: InputProgressBarArgs): string => `
        <div class="form-control-file-progress-bar-wrapper">
            <progress class="form-control-file-progress-bar" value="${value}" max="${max}"></progress>
        </div>
    `,
    args: {
        value: 60,
        max: 100,
    },
    argTypes: {
        value: { control: { type: 'range', min: 0, max: 100, step: 5 } },
        max: { control: { type: 'number', min: 1 } },
    },
    parameters: {
        docs: {
            description: {
                component: 'Progress bar styling for file inputs and uploads.',
            },
        },
    },
} satisfies Meta<InputProgressBarArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Progress indicator styling for file uploads or completion states.',
            },
        },
    },
};

export const Playground: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Adjust the progress value to validate track and fill styles.',
            },
        },
    },
};
