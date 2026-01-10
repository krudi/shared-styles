import type { StoryObj } from '@storybook/html-vite';

import type { ButtonArgs } from './button.types';
import { argTypes, defaultArgs } from './button.controls';
import { renderButton } from './button.render';

export const Default: StoryObj<ButtonArgs> = {
    args: { ...defaultArgs },
    render: renderButton,
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Canonical primary button example.',
            },
        },
    },
};

export const Playground: StoryObj<ButtonArgs> = {
    args: { ...defaultArgs },
    argTypes,
    render: renderButton,
    parameters: {
        docs: {
            description: {
                story: 'Use the controls to switch variant, size, and disabled state.',
            },
        },
    },
};
