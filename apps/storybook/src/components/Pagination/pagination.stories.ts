import type { Meta, StoryObj } from '@storybook/html-vite';

import type { PaginationArgs } from './pagination.types';

const meta = {
    title: 'Components/Pagination',
    tags: ['autodocs'],
    render: ({ currentPage, totalPages }: PaginationArgs): string => {
        const safeTotal = Math.max(3, Math.floor(totalPages));
        const safeCurrent = Math.min(Math.max(1, Math.floor(currentPage)), safeTotal);
        const pageItems = new Set([1, safeCurrent - 1, safeCurrent, safeCurrent + 1, safeTotal]);
        const pageList = Array.from(pageItems)
            .filter((page) => page >= 1 && page <= safeTotal)
            .sort((a, b) => a - b);
        const displayItems: Array<number | 'ellipsis'> = [];

        pageList.forEach((page, index) => {
            if (index > 0 && page - pageList[index - 1] > 1) {
                displayItems.push('ellipsis');
            }
            displayItems.push(page);
        });

        return `
            <nav class="pagination" aria-label="Pagination">
                <ul class="pagination-list" role="list">
                    <li class="pagination-list-item">
                        <a class="pagination-list-item-control" href="#prev" aria-label="Previous" aria-disabled="${safeCurrent === 1}">
                            Previous
                        </a>
                    </li>
                    ${displayItems
                        .map((item) =>
                            item === 'ellipsis'
                                ? `<li class="pagination-list-item"><span class="pagination-list-item-ellipsis" aria-hidden="true">…</span></li>`
                                : item === safeCurrent
                                  ? `<li class="pagination-list-item"><span class="pagination-list-item-text" aria-current="page">${item}</span></li>`
                                  : `<li class="pagination-list-item"><a class="pagination-list-item-link" href="#${item}">${item}</a></li>`
                        )
                        .join('')}
                    <li class="pagination-list-item">
                        <a class="pagination-list-item-control" href="#next" aria-label="Next" aria-disabled="${safeCurrent === safeTotal}">
                            Next
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
                    'Pagination bar with centered list. Active page uses <code>.pagination-list-item-text</code>; ellipsis uses <code>.pagination-list-item-ellipsis</code>.',
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
