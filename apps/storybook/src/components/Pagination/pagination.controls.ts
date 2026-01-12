import type { Meta } from '@storybook/html-vite';

import type { PaginationArgs } from './pagination.types';

export const defaultArgs: PaginationArgs = {
    currentPage: 2,
    totalPages: 5,
};

export const argTypes: Meta<PaginationArgs>['argTypes'] = {
    currentPage: { control: { type: 'number', min: 1, max: 10, step: 1 } },
    totalPages: { control: { type: 'number', min: 3, max: 12, step: 1 } },
};
