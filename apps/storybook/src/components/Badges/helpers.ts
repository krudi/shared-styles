export type BadgeVariant = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger';

export const badgeVariants: Array<{
    className: `badge-${BadgeVariant}`;
    label: string;
    usage: string;
}> = [
    { className: 'badge-primary', label: 'Primary', usage: 'Primary highlights, key statuses.' },
    { className: 'badge-secondary', label: 'Secondary', usage: 'Supporting categories and tags.' },
    { className: 'badge-success', label: 'Success', usage: 'Positive confirmations.' },
    { className: 'badge-info', label: 'Info', usage: 'Neutral informational hints.' },
    { className: 'badge-warning', label: 'Warning', usage: 'Cautionary messaging.' },
    { className: 'badge-danger', label: 'Danger', usage: 'Errors or destructive actions.' },
];

export const buildBadgeCard = () => `
    <section style="border: 1px solid var(--c-white-200); border-radius: var(--border-radius-md); padding: var(--spacer-2); box-shadow: var(--box-shadow-default);">
        <h2 class="h4 mt-0">Badge variants</h2>
        <div style="display: flex; flex-wrap: wrap; gap: var(--spacer-1);">
            ${badgeVariants
                .map(
                    (badge) => `
                    <span class="badge ${badge.className}">${badge.label}</span>
                `
                )
                .join('')}
        </div>
        <p class="mt-2 text-gray mb-0">All badges inherit the same padding, radius, and weight—only the hue changes.</p>
    </section>
`;

export const buildInlineUsage = () => `
    <section style="border: 1px solid var(--c-white-200); border-radius: var(--border-radius-md); padding: var(--spacer-2); box-shadow: var(--box-shadow-default);">
        <h2 class="h4 mt-0">Inline usage</h2>
        <p class="text-gray">Badges fit naturally within copy. Example: <span class="badge badge-success">In Stock</span> or <span class="badge badge-warning">Backordered</span>.</p>
        <p class="text-gray mb-0">Use semantic labels; avoid stuffing long sentences inside badges.</p>
    </section>
`;
