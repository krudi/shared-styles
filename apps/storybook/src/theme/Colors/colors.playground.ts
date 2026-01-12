import type { StoryObj } from '@storybook/html-vite';

import type { ColorsArgs } from './colors.types';
import { argTypes, defaultArgs } from './colors.controls';
import { renderColorsPlayground } from './colors.render';

export const Default: StoryObj<ColorsArgs> = {
    args: { ...defaultArgs },
    render: renderColorsPlayground,
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Use the <code>bg-*</code> helpers to apply the palette to blocks while preserving accessible text contrast via paired emphasis colors.',
            },
        },
    },
};

export const Playground: StoryObj<ColorsArgs> = {
    args: { ...defaultArgs },
    argTypes,
    render: renderColorsPlayground,
    parameters: {
        docs: {
            description: {
                story: 'Review palette balance and usage notes as you adjust theme tokens.',
            },
        },
    },
};
