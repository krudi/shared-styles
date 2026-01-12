import type { StoryObj } from '@storybook/html-vite';

import { argTypes, defaultArgs } from './modal.controls';
import { renderModalPlayground } from './modal.render';
import type { ModalArgs } from './modal.types';

export const Default: StoryObj<ModalArgs> = {
    args: { ...defaultArgs },
    render: renderModalPlayground,
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Canonical modal example with title, body, and footer actions.',
            },
        },
    },
};

export const Playground: StoryObj<ModalArgs> = {
    args: { ...defaultArgs },
    argTypes,
    render: renderModalPlayground,
    parameters: {
        docs: {
            description: {
                story: 'Tweak the title, body copy, and button labels to preview modal layout variations.',
            },
        },
    },
};
