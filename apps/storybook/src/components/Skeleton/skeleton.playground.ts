import type { StoryObj } from '@storybook/html-vite';

import { argTypes, defaultArgs } from './skeleton.controls';
import { renderSkeletonPlayground } from './skeleton.render';
import type { SkeletonArgs } from './skeleton.types';

export const Default: StoryObj<SkeletonArgs> = {
    args: { ...defaultArgs },
    render: renderSkeletonPlayground,
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Canonical skeleton example with three lines.',
            },
        },
    },
};

export const Playground: StoryObj<SkeletonArgs> = {
    args: { ...defaultArgs },
    argTypes,
    render: renderSkeletonPlayground,
    parameters: {
        docs: {
            description: {
                story: 'Increase the line count to preview stacked loading placeholders.',
            },
        },
    },
};
