import type { StoryObj } from '@storybook/html-vite';

import type { InputGroupArgs } from './input-group.types';
import { argTypes, defaultArgs } from './input-group.controls';
import { renderInputGroupPlayground } from './input-group.render';

export const Default: StoryObj<InputGroupArgs> = {
    args: { ...defaultArgs },
    render: renderInputGroupPlayground,
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Grouped input with leading text and trailing action button.',
            },
        },
    },
};

export const Playground: StoryObj<InputGroupArgs> = {
    args: { ...defaultArgs },
    argTypes,
    render: renderInputGroupPlayground,
    parameters: {
        docs: {
            description: {
                story: 'Use input groups for composite inputs and inline actions.',
            },
        },
    },
};
