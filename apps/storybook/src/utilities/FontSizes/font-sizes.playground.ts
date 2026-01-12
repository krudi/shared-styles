import type { StoryObj } from '@storybook/html-vite';

import type { FontSizesArgs } from './font-sizes.types';
import { argTypes, defaultArgs } from './font-sizes.controls';
import { renderFontSizesPlayground } from './font-sizes.render';

export const Default: StoryObj<FontSizesArgs> = {
    args: { ...defaultArgs },
    render: renderFontSizesPlayground,
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Use these scale helpers for quick typography adjustments while keeping the base font family.',
            },
        },
    },
};

export const Playground: StoryObj<FontSizesArgs> = {
    args: { ...defaultArgs },
    argTypes,
    render: renderFontSizesPlayground,
    parameters: {
        docs: {
            description: {
                story: 'Font size helpers stay aligned with the type ramp for consistent hierarchy.',
            },
        },
    },
};
