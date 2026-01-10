import type { ListArgs } from './list.types';

export const renderList = (): string => `
    <ul class="unordered-list">
        <li>Consistent zero margins via <code>.unordered-list</code>.</li>
        <li>Use regular list semantics for accessibility.</li>
        <li>Apply utilities for spacing and colour as needed.</li>
    </ul>
`;

export const renderListPlayground = ({ items }: ListArgs): string => `
    <ul class="unordered-list">
        ${items.map((item) => `<li>${item}</li>`).join('')}
    </ul>
`;
