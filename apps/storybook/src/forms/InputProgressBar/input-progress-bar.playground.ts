import type { StoryObj } from '@storybook/html-vite';

import { argTypes, defaultArgs } from './input-progress-bar.controls';
import { renderInputProgressBarPlayground } from './input-progress-bar.render';
import type { InputProgressBarArgs } from './input-progress-bar.types';

export const Default: StoryObj<InputProgressBarArgs> = {
    args: { ...defaultArgs },
    render: renderInputProgressBarPlayground,
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Progress indicator styling for file uploads or completion states.',
            },
        },
    },
};

export const Playground: StoryObj<InputProgressBarArgs> = {
    args: { ...defaultArgs },
    argTypes,
    render: renderInputProgressBarPlayground,
    parameters: {
        docs: {
            description: {
                story: 'Adjust the progress value to validate track and fill styles.',
            },
        },
    },
};
