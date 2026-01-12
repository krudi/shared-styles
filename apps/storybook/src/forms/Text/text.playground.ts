import type { StoryObj } from '@storybook/html-vite';

import type { TextArgs } from './text.types';
import { argTypes, defaultArgs } from './text.controls';
import { renderTextPlayground } from './text.render';

export const Default: StoryObj<TextArgs> = {
    args: { ...defaultArgs },
    render: renderTextPlayground,
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Helper, hint, and error text treatments for form feedback.',
            },
        },
    },
};

export const Playground: StoryObj<TextArgs> = {
    args: { ...defaultArgs },
    argTypes,
    render: renderTextPlayground,
    parameters: {
        docs: {
            description: {
                story: 'Pair these text styles with inputs to reinforce validation states.',
            },
        },
    },
};
