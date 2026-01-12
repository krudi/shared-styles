import type { StoryObj } from '@storybook/html-vite';

import { argTypes, defaultArgs } from './pagination.controls';
import { renderPaginationPlayground } from './pagination.render';
import type { PaginationArgs } from './pagination.types';

export const Default: StoryObj<PaginationArgs> = {
    args: { ...defaultArgs },
    render: renderPaginationPlayground,
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Canonical pagination example with a mid-range active page.',
            },
        },
    },
};

export const Playground: StoryObj<PaginationArgs> = {
    args: { ...defaultArgs },
    argTypes,
    render: renderPaginationPlayground,
    parameters: {
        docs: {
            description: {
                story: 'Adjust current and total pages to preview the active state and control spacing.',
            },
        },
    },
};
