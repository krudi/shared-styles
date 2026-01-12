import type { StoryObj } from '@storybook/html-vite';

import { argTypes, defaultArgs } from './padding.controls';
import { renderPaddingPlayground } from './padding.render';
import type { PaddingArgs } from './padding.types';

export const Default: StoryObj<PaddingArgs> = {
    args: { ...defaultArgs },
    render: renderPaddingPlayground,
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Padding helpers for consistent interior spacing.',
            },
        },
    },
};

export const Playground: StoryObj<PaddingArgs> = {
    args: { ...defaultArgs },
    argTypes,
    render: renderPaddingPlayground,
    parameters: {
        docs: {
            description: {
                story: 'Use padding utilities to adjust internal spacing on containers.',
            },
        },
    },
};
