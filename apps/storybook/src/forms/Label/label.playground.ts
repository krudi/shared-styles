import type { StoryObj } from '@storybook/html-vite';

import type { LabelArgs } from './label.types';
import { argTypes, defaultArgs } from './label.controls';
import { renderLabelPlayground } from './label.render';

export const Default: StoryObj<LabelArgs> = {
    args: { ...defaultArgs },
    render: renderLabelPlayground,
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Form label with optional required indicator styling.',
            },
        },
    },
};

export const Playground: StoryObj<LabelArgs> = {
    args: { ...defaultArgs },
    argTypes,
    render: renderLabelPlayground,
    parameters: {
        docs: {
            description: {
                story: 'Toggle the required indicator to match validation requirements.',
            },
        },
    },
};
