import type { StoryObj } from '@storybook/html-vite';

import type { BadgeArgs } from './badges.types';
import { argTypes, defaultArgs } from './badges.controls';
import { renderBadgesPlayground } from './badges.render';

export const Default: StoryObj<BadgeArgs> = {
    args: { ...defaultArgs },
    render: renderBadgesPlayground,
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Canonical badge example with the primary variant.',
            },
        },
    },
};

export const Playground: StoryObj<BadgeArgs> = {
    args: { ...defaultArgs },
    argTypes,
    render: renderBadgesPlayground,
    parameters: {
        docs: {
            description: {
                story: 'Use the controls to toggle label and variant.',
            },
        },
    },
};
