import type { StoryObj } from '@storybook/html-vite';

import { argTypes, defaultArgs } from './radio.controls';
import { renderRadioPlayground } from './radio.render';
import type { RadioArgs } from './radio.types';

export const Default: StoryObj<RadioArgs> = {
    args: { ...defaultArgs },
    render: renderRadioPlayground,
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Radio styling for single-select inputs with aligned labels.',
            },
        },
    },
};

export const Playground: StoryObj<RadioArgs> = {
    args: { ...defaultArgs },
    argTypes,
    render: renderRadioPlayground,
    parameters: {
        docs: {
            description: {
                story: 'Use radio inputs for mutually exclusive choices.',
            },
        },
    },
};
