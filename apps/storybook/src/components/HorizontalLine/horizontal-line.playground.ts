import type { StoryObj } from '@storybook/html-vite';

import { argTypes, defaultArgs } from './horizontal-line.controls';
import { renderHorizontalLinePlayground } from './horizontal-line.render';
import type { HorizontalLineArgs } from './horizontal-line.types';

export const Default: StoryObj<HorizontalLineArgs> = {
    args: { ...defaultArgs },
    render: renderHorizontalLinePlayground,
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Canonical horizontal rule example with supporting text.',
            },
        },
    },
};

export const Playground: StoryObj<HorizontalLineArgs> = {
    args: { ...defaultArgs },
    argTypes,
    render: renderHorizontalLinePlayground,
    parameters: {
        docs: {
            description: {
                story: 'Adjust the copy around the divider to preview layout and rhythm.',
            },
        },
    },
};
