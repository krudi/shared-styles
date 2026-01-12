import type { StoryObj } from '@storybook/html-vite';

import type { SpacingScaleArgs } from './spacing-scale.types';
import { argTypes, defaultArgs } from './spacing-scale.controls';
import { renderSpacingScalePlayground } from './spacing-scale.render';

export const Default: StoryObj<SpacingScaleArgs> = {
    args: { ...defaultArgs },
    render: renderSpacingScalePlayground,
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Tokens back the spacing helpers for consistent rhythm across components and layouts.',
            },
        },
    },
};

export const Playground: StoryObj<SpacingScaleArgs> = {
    args: { ...defaultArgs },
    argTypes,
    render: renderSpacingScalePlayground,
    parameters: {
        docs: {
            description: {
                story: 'Reference these tokens when building bespoke spacing rules.',
            },
        },
    },
};
