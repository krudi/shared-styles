import type { SvgArgs } from './svg.types';

export const renderSvg = ({ label }: SvgArgs): string => `
    <div style="display: inline-flex; flex-direction: column; gap: 0.75rem;">
        <svg viewBox="0 0 600 400" role="img" aria-label="${label}">
            <image href="https://placehold.co/600x400" width="600" height="400" />
        </svg>
        <span>${label}</span>
    </div>
`;

export const renderSvgPlayground = (args: SvgArgs): string => renderSvg(args);
