import type { StoryObj } from '@storybook/html-vite';

import type { TextColorsArgs } from './text-colors.types';
import { argTypes, defaultArgs } from './text-colors.controls';
import { renderTextColorsPlayground } from './text-colors.render';

export const Default: StoryObj<TextColorsArgs> = {
    args: { ...defaultArgs },
    render: renderTextColorsPlayground,
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Apply semantic hues for status and emphasis without altering typography styles.',
            },
        },
    },
};

export const Playground: StoryObj<TextColorsArgs> = {
    args: { ...defaultArgs },
    argTypes,
    render: renderTextColorsPlayground,
    parameters: {
        docs: {
            description: {
                story: 'Text color utilities pair with semantic HTML for accessible emphasis.',
            },
        },
    },
};
