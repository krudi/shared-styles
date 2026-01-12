import type { StoryObj } from '@storybook/html-vite';

import type { TypographyArgs } from './typography.types';
import { argTypes, defaultArgs } from './typography.controls';
import { renderTypographyPlayground } from './typography.render';

export const Default: StoryObj<TypographyArgs> = {
    args: { ...defaultArgs },
    render: renderTypographyPlayground,
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'The default type ramp demonstrates automatic margins, link affordances, and heading font family overrides.',
            },
        },
    },
};

export const Playground: StoryObj<TypographyArgs> = {
    args: { ...defaultArgs },
    argTypes,
    render: renderTypographyPlayground,
    parameters: {
        docs: {
            description: {
                story: 'Review headings, body text, and link styles together for hierarchy checks.',
            },
        },
    },
};
