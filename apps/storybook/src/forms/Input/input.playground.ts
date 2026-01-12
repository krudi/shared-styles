import type { StoryObj } from '@storybook/html-vite';

import type { InputArgs } from './input.types';
import { argTypes, defaultArgs } from './input.controls';
import { renderInputPlayground } from './input.render';

export const Default: StoryObj<InputArgs> = {
    args: { ...defaultArgs },
    render: renderInputPlayground,
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Single-line text input styled with the shared form control tokens.',
            },
        },
    },
};

export const Playground: StoryObj<InputArgs> = {
    args: { ...defaultArgs },
    argTypes,
    render: renderInputPlayground,
    parameters: {
        docs: {
            description: {
                story: 'Adjust placeholder and disabled state to validate input styling.',
            },
        },
    },
};
