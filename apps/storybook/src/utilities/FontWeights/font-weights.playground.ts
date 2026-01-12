import type { StoryObj } from '@storybook/html-vite';

import type { FontWeightsArgs } from './font-weights.types';
import { argTypes, defaultArgs } from './font-weights.controls';
import { renderFontWeightsPlayground } from './font-weights.render';

export const Default: StoryObj<FontWeightsArgs> = {
    args: { ...defaultArgs },
    render: renderFontWeightsPlayground,
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Pair font weight utilities with semantic headings to fine-tune emphasis.',
            },
        },
    },
};

export const Playground: StoryObj<FontWeightsArgs> = {
    args: { ...defaultArgs },
    argTypes,
    render: renderFontWeightsPlayground,
    parameters: {
        docs: {
            description: {
                story: 'Use weight utilities to dial in hierarchy across typographic elements.',
            },
        },
    },
};
