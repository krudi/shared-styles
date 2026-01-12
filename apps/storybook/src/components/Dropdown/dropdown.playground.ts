import type { StoryObj } from '@storybook/html-vite';

import { argTypes, defaultArgs } from './dropdown.controls';
import { renderDropdownPlayground } from './dropdown.render';
import type { DropdownArgs } from './dropdown.types';

export const Default: StoryObj<DropdownArgs> = {
    args: { ...defaultArgs },
    render: renderDropdownPlayground,
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Canonical dropdown example with default items.',
            },
        },
    },
};

export const Playground: StoryObj<DropdownArgs> = {
    args: { ...defaultArgs },
    argTypes,
    render: renderDropdownPlayground,
    parameters: {
        docs: {
            description: {
                story: 'Use the controls to swap the trigger text and menu items.',
            },
        },
    },
};
