import type { InputProgressBarArgs } from './input-progress-bar.types';

export const renderInputProgressBar = ({ value, max }: InputProgressBarArgs): string => `
    <div class="form-control-file-progress-bar-wrapper">
        <progress class="form-control-file-progress-bar" value="${value}" max="${max}"></progress>
    </div>
`;

export const renderInputProgressBarPlayground = (args: InputProgressBarArgs): string =>
    renderInputProgressBar(args);
