import type { StoryObj } from '@storybook/html-vite';

import type { TextDecorationArgs } from './text-decoration.types';
import { argTypes, defaultArgs } from './text-decoration.controls';
import { renderTextDecorationPlayground } from './text-decoration.render';

export const Default: StoryObj<TextDecorationArgs> = {
    args: { ...defaultArgs },
    render: renderTextDecorationPlayground,
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Decoration helpers are ideal for inline emphasis without custom CSS.',
            },
        },
    },
};

export const Playground: StoryObj<TextDecorationArgs> = {
    args: { ...defaultArgs },
    argTypes,
    render: renderTextDecorationPlayground,
    parameters: {
        docs: {
            description: {
                story: 'Use decoration utilities to refine inline emphasis states.',
            },
        },
    },
};
