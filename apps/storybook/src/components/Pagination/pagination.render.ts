import type { PaginationArgs } from './pagination.types';

export const renderPagination = (): string => `
    <nav class="pagination" aria-label="Pagination">
        <ul class="pagination-list">
            <li class="pagination-list-item">
                <a class="pagination-list-item-control" href="#prev" aria-label="Previous">‹</a>
            </li>
            <li class="pagination-list-item">
                <a class="pagination-list-item-link" href="#1">1</a>
            </li>
            <li class="pagination-list-item">
                <span class="pagination-list-item-text" aria-current="page">2</span>
            </li>
            <li class="pagination-list-item">
                <a class="pagination-list-item-link" href="#3">3</a>
            </li>
            <li class="pagination-list-item">
                <a class="pagination-list-item-control" href="#next" aria-label="Next">›</a>
            </li>
        </ul>
    </nav>
`;

export const renderPaginationPlayground = ({ currentPage, totalPages }: PaginationArgs): string => {
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
};
