import type { StoryObj } from '@storybook/html-vite';

import type { GridArgs } from './grid.types';
import { argTypes, defaultArgs } from './grid.controls';
import { renderGridPlayground } from './grid.render';

export const Grid: StoryObj<GridArgs> = {
    args: { ...defaultArgs },
    argTypes,
    render: renderGridPlayground,
    name: 'Grid',
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Compose <code>.row</code> and <code>.col-*</code> classes to create responsive layouts.',
            },
        },
    },
};
