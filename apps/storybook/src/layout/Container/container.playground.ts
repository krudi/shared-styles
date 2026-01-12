import type { StoryObj } from '@storybook/html-vite';

import { argTypes, defaultArgs } from './container.controls';
import { renderContainerPlayground } from './container.render';
import type { ContainerArgs } from './container.types';

export const Container: StoryObj<ContainerArgs> = {
    args: { ...defaultArgs },
    argTypes,
    render: renderContainerPlayground,
    name: 'Container',
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Use <code>.container</code> to center content and cap the design width across breakpoints.',
            },
        },
    },
};
