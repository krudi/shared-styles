import type { StoryObj } from '@storybook/html-vite';

import type { ListArgs } from './list.types';
import { argTypes, defaultArgs } from './list.controls';
import { renderListPlayground } from './list.render';

export const Default: StoryObj<ListArgs> = {
    args: { ...defaultArgs },
    render: renderListPlayground,
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Canonical unordered list example.',
            },
        },
    },
};

export const Playground: StoryObj<ListArgs> = {
    args: { ...defaultArgs },
    argTypes,
    render: renderListPlayground,
    parameters: {
        docs: {
            description: {
                story: 'Add or remove list items with the controls to see spacing and bullets update.',
            },
        },
    },
};
