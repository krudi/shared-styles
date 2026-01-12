import type { StoryObj } from '@storybook/html-vite';

import type { SvgArgs } from './svg.types';
import { argTypes, defaultArgs } from './svg.controls';
import { renderSvgPlayground } from './svg.render';

export const Default: StoryObj<SvgArgs> = {
    args: { ...defaultArgs },
    render: renderSvgPlayground,
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'SVG icons inherit size from the CSS variables and current text color.',
            },
        },
    },
};

export const Playground: StoryObj<SvgArgs> = {
    args: { ...defaultArgs },
    argTypes,
    render: renderSvgPlayground,
    parameters: {
        docs: {
            description: {
                story: 'Update the label to validate accessibility text.',
            },
        },
    },
};
