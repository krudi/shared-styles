import type { StoryObj } from '@storybook/html-vite';

import { argTypes, defaultArgs } from './button-group.controls';
import { renderButtonGroupPlayground } from './button-group.render';
import type { ButtonGroupArgs } from './button-group.types';

export const Default: StoryObj<ButtonGroupArgs> = {
    args: { ...defaultArgs },
    render: renderButtonGroupPlayground,
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Canonical three-button group example.',
            },
        },
    },
};

export const Playground: StoryObj<ButtonGroupArgs> = {
    args: { ...defaultArgs },
    argTypes,
    render: renderButtonGroupPlayground,
    parameters: {
        docs: {
            description: {
                story: 'Swap the button labels and variant while preserving the grouped radius.',
            },
        },
    },
};
