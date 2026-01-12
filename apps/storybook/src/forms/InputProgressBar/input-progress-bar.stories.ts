import type { Meta } from '@storybook/html-vite';

import { renderInputProgressBar } from './input-progress-bar.render';
import type { InputProgressBarArgs } from './input-progress-bar.types';

const meta: Meta<InputProgressBarArgs> = {
    title: 'Forms/Input Progress Bar',
    tags: ['autodocs'],
    render: renderInputProgressBar,
    parameters: {
        docs: {
            description: {
                component: 'Progress bar styling for file inputs and uploads.',
            },
        },
    },
};

export default meta;
export { Default, Playground } from './input-progress-bar.playground';
