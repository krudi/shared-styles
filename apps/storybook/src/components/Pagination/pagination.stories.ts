import type { Meta } from '@storybook/html-vite';

import { renderPagination } from './pagination.render';
import type { PaginationArgs } from './pagination.types';

const meta: Meta<PaginationArgs> = {
    title: 'Components/Pagination',
    tags: ['autodocs'],
    render: renderPagination,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component:
                    'Pagination bar with centered list. Active page uses <code>.pagination-list-item-text</code>; links use the link class and hover tokens.',
            },
        },
    },
};

export default meta;
export { Default, Playground } from './pagination.playground';
