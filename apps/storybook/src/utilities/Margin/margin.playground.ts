import type { StoryObj } from '@storybook/html-vite';

import type { MarginArgs } from './margin.types';
import { argTypes, defaultArgs } from './margin.controls';
import { renderMarginPlayground } from './margin.render';

export const Default: StoryObj<MarginArgs> = {
    args: { ...defaultArgs },
    render: renderMarginPlayground,
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Margin helpers for spacing between components and sections.',
            },
        },
    },
};

export const Playground: StoryObj<MarginArgs> = {
    args: { ...defaultArgs },
    argTypes,
    render: renderMarginPlayground,
    parameters: {
        docs: {
            description: {
                story: 'Use margin utilities to manage vertical and horizontal rhythm.',
            },
        },
    },
};
