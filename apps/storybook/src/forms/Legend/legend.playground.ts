import type { StoryObj } from '@storybook/html-vite';

import type { LegendArgs } from './legend.types';
import { argTypes, defaultArgs } from './legend.controls';
import { renderLegendPlayground } from './legend.render';

export const Default: StoryObj<LegendArgs> = {
    args: { ...defaultArgs },
    render: renderLegendPlayground,
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Legend styling for grouped form content.',
            },
        },
    },
};

export const Playground: StoryObj<LegendArgs> = {
    args: { ...defaultArgs },
    argTypes,
    render: renderLegendPlayground,
    parameters: {
        docs: {
            description: {
                story: 'Update legend copy to label grouped fields.',
            },
        },
    },
};
