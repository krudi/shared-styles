import type { StoryObj } from '@storybook/html-vite';

import { argTypes, defaultArgs } from './img.controls';
import { renderImgPlayground } from './img.render';
import type { ImgArgs } from './img.types';

export const Default: StoryObj<ImgArgs> = {
    args: { ...defaultArgs },
    render: renderImgPlayground,
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Images inherit responsive sizing and a small border radius.',
            },
        },
    },
};

export const Playground: StoryObj<ImgArgs> = {
    args: { ...defaultArgs },
    argTypes,
    render: renderImgPlayground,
    parameters: {
        docs: {
            description: {
                story: 'Update the alt text to verify accessibility labels.',
            },
        },
    },
};
