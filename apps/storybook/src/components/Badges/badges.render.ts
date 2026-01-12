import type { BadgeArgs, BadgeVariant } from './badges.types';

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

export const renderBadges = (): string => `
    ${badgeVariants.map((badge) => `<span class="badge ${badge.className}">${badge.label}</span>`).join('')}
`;

export const renderBadgesPlayground = ({ label, variant }: BadgeArgs): string => `
    <span class="badge badge-${variant}">${label}</span>
`;
