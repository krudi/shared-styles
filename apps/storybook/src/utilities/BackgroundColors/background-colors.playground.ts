import type { StoryObj } from '@storybook/html-vite';

import { argTypes, defaultArgs } from './background-colors.controls';
import { renderBackgroundColorsPlayground } from './background-colors.render';
import type { BackgroundColorsArgs } from './background-colors.types';

export const Default: StoryObj<BackgroundColorsArgs> = {
    args: { ...defaultArgs },
    render: renderBackgroundColorsPlayground,
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Background utilities include built-in text emphasis colors to preserve contrast.',
            },
        },
    },
};

export const Playground: StoryObj<BackgroundColorsArgs> = {
    args: { ...defaultArgs },
    argTypes,
    render: renderBackgroundColorsPlayground,
    parameters: {
        docs: {
            description: {
                story: 'Use background helpers for quick surface emphasis in layouts.',
            },
        },
    },
};
