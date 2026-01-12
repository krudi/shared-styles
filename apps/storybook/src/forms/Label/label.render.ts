import type { LabelArgs } from './label.types';

export const renderLabel = ({ text, required }: LabelArgs): string => `
    <label class="form-label">
        ${text}${required ? ' <span class="form-label-required" aria-hidden="true">*</span>' : ''}
    </label>
`;

export const renderLabelPlayground = (args: LabelArgs): string => renderLabel(args);
