import type { StoryObj } from '@storybook/html-vite';

import { argTypes, defaultArgs } from './fieldset.controls';
import { renderFieldsetPlayground } from './fieldset.render';
import type { FieldsetArgs } from './fieldset.types';

export const Default: StoryObj<FieldsetArgs> = {
    args: { ...defaultArgs },
    render: renderFieldsetPlayground,
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Fieldset styling groups related form controls with consistent padding and borders.',
            },
        },
    },
};

export const Playground: StoryObj<FieldsetArgs> = {
    args: { ...defaultArgs },
    argTypes,
    render: renderFieldsetPlayground,
    parameters: {
        docs: {
            description: {
                story: 'Use fieldsets to group related fields and apply shared background styling.',
            },
        },
    },
};
