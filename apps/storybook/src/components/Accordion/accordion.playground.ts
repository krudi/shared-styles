import type { StoryObj } from '@storybook/html-vite';

import { argTypes, defaultArgs } from './accordion.controls';
import { renderAccordionPlayground } from './accordion.render';
import type { AccordionArgs } from './accordion.types';

export const Default: StoryObj<AccordionArgs> = {
    args: { ...defaultArgs },
    render: renderAccordionPlayground,
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Canonical accordion example with default spacing and typography.',
            },
        },
    },
};

export const Playground: StoryObj<AccordionArgs> = {
    args: { ...defaultArgs },
    argTypes,
    render: renderAccordionPlayground,
    parameters: {
        docs: {
            description: {
                story: 'Adjust the summary and body copy; toggle open state to preview the chevron rotation and spacing.',
            },
        },
    },
};
