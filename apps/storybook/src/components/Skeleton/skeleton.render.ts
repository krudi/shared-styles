import type { SkeletonArgs } from './skeleton.types';

export const renderSkeleton = (): string => `
    <span class="skeleton-line"></span>
    <span class="skeleton-line"></span>
    <span class="skeleton-line"></span>
`;

export const renderSkeletonPlayground = ({ lines }: SkeletonArgs): string => `
    ${Array.from({ length: Math.max(1, Math.min(lines, 6)) })
        .map(() => `<span class="skeleton-line"></span>`)
        .join('')}
`;
