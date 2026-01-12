import type { StoryObj } from '@storybook/html-vite';

import type { UtilitiesArgs } from './utilities.types';
import { argTypes, defaultArgs } from './utilities.controls';
import { renderUtilitiesPlayground } from './utilities.render';

export const Default: StoryObj<UtilitiesArgs> = {
    args: { ...defaultArgs },
    render: renderUtilitiesPlayground,
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Form layout utility spacing applied via <code>.form-block</code>.',
            },
        },
    },
};

export const Playground: StoryObj<UtilitiesArgs> = {
    args: { ...defaultArgs },
    argTypes,
    render: renderUtilitiesPlayground,
    parameters: {
        docs: {
            description: {
                story: 'Use <code>.form-block</code> to keep consistent vertical spacing between fields.',
            },
        },
    },
};
