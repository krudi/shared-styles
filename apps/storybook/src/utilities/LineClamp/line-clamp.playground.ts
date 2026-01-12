import type { StoryObj } from '@storybook/html-vite';

import type { LineClampArgs } from './line-clamp.types';
import { argTypes, defaultArgs } from './line-clamp.controls';
import { renderLineClampPlayground } from './line-clamp.render';

export const Default: StoryObj<LineClampArgs> = {
    args: { ...defaultArgs },
    render: renderLineClampPlayground,
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Clamp utilities truncate multi-line text to keep cards and lists tidy.',
            },
        },
    },
};

export const Playground: StoryObj<LineClampArgs> = {
    args: { ...defaultArgs },
    argTypes,
    render: renderLineClampPlayground,
    parameters: {
        docs: {
            description: {
                story: 'Line clamp helpers are great for previews and summaries.',
            },
        },
    },
};
