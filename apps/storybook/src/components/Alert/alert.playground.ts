import type { StoryObj } from '@storybook/html-vite';

import type { AlertArgs } from './alert.types';
import { argTypes, defaultArgs } from './alert.controls';
import { renderAlertPlayground } from './alert.render';

export const Default: StoryObj<AlertArgs> = {
    args: { ...defaultArgs },
    render: renderAlertPlayground,
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Canonical alert example with default variant and copy.',
            },
        },
    },
};

export const Playground: StoryObj<AlertArgs> = {
    args: { ...defaultArgs },
    argTypes,
    render: renderAlertPlayground,
    parameters: {
        docs: {
            description: {
                story: 'Use the controls to swap variant, copy, and dismissible state on a single alert.',
            },
        },
    },
};
