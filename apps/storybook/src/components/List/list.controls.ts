import type { Meta } from '@storybook/html-vite';

import type { ListArgs } from './list.types';

export const defaultArgs: ListArgs = {
    items: [
        'Consistent zero margins via .unordered-list.',
        'Use regular list semantics for accessibility.',
        'Apply utilities for spacing and colour as needed.',
    ],
};

export const argTypes: Meta<ListArgs>['argTypes'] = {
    items: { control: 'object' },
};
