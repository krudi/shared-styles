import type { StoryObj } from '@storybook/html-vite';

import { argTypes, defaultArgs } from './checkbox.controls';
import { renderCheckboxPlayground } from './checkbox.render';
import type { CheckboxArgs } from './checkbox.types';

export const Default: StoryObj<CheckboxArgs> = {
    args: { ...defaultArgs },
    render: renderCheckboxPlayground,
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Checkbox styling for multi-select inputs with aligned labels.',
            },
        },
    },
};

export const Playground: StoryObj<CheckboxArgs> = {
    args: { ...defaultArgs },
    argTypes,
    render: renderCheckboxPlayground,
    parameters: {
        docs: {
            description: {
                story: 'Use checkbox inputs for independent toggles.',
            },
        },
    },
};
