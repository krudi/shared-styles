import type { Meta, StoryObj } from '@storybook/html-vite';

import type { PaginationArgs } from './pagination.types';

const meta = {
    title: 'Components/Pagination',
    tags: ['autodocs'],
    render: ({ currentPage, totalPages }: PaginationArgs): string => {
        const safeTotal = Math.max(3, Math.floor(totalPages));
        const safeCurrent = Math.min(Math.max(1, Math.floor(currentPage)), safeTotal);
        const pages = Array.from({ length: safeTotal }, (_, index) => index + 1);

        return `
            <nav class="pagination" aria-label="Pagination">
                <ul class="pagination-list">
                    <li class="pagination-list-item">
                        <a class="pagination-list-item-control" href="#prev" aria-label="Previous" aria-disabled="${safeCurrent === 1}">
                            ‹
                        </a>
                    </li>
                    ${pages
                        .map((page) =>
                            page === safeCurrent
                                ? `<li class="pagination-list-item"><span class="pagination-list-item-text" aria-current="page">${page}</span></li>`
                                : `<li class="pagination-list-item"><a class="pagination-list-item-link" href="#${page}">${page}</a></li>`
                        )
                        .join('')}
                    <li class="pagination-list-item">
                        <a class="pagination-list-item-control" href="#next" aria-label="Next" aria-disabled="${safeCurrent === safeTotal}">
                            ›
                        </a>
                    </li>
                </ul>
            </nav>
        `;
    },
    args: {
        currentPage: 2,
        totalPages: 5,
    },
    argTypes: {
        currentPage: { control: { type: 'number', min: 1, max: 10, step: 1 } },
        totalPages: { control: { type: 'number', min: 3, max: 12, step: 1 } },
    },
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component:
                    'Pagination bar with centered list. Active page uses <code>.pagination-list-item-text</code>; links use the link class and hover tokens.',
            },
        },
    },
} satisfies Meta<PaginationArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Canonical pagination example with a mid-range active page.',
            },
        },
    },
};

export const Playground: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Adjust current and total pages to preview the active state and control spacing.',
            },
        },
    },
};
