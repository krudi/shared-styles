import type { StoryObj } from '@storybook/html-vite';

import type { FormFieldArgs } from './forms.types';
import { argTypes, defaultArgs } from './forms.controls';
import { renderFormField } from './forms.render';

export const Default: StoryObj<FormFieldArgs> = {
    args: { ...defaultArgs },
    render: renderFormField,
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Canonical form field example with default state.',
            },
        },
    },
};

export const Playground: StoryObj<FormFieldArgs> = {
    args: { ...defaultArgs },
    argTypes,
    render: renderFormField,
    parameters: {
        docs: {
            description: {
                story: 'Single field playground to toggle required state and validation messaging.',
            },
        },
    },
};
