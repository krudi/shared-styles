import type { ButtonGroupArgs } from './button-group.types';

export const renderButtonGroup = (): string => `
    <div class="btn-group">
        <button type="button" class="btn btn-primary">Left</button>
        <button type="button" class="btn btn-primary">Middle</button>
        <button type="button" class="btn btn-primary">Right</button>
    </div>
`;

export const renderButtonGroupPlayground = ({ labels, variant }: ButtonGroupArgs): string => `
    <div class="btn-group">
        ${labels.map((label) => `<button type="button" class="btn btn-${variant}">${label}</button>`).join('')}
    </div>
`;
