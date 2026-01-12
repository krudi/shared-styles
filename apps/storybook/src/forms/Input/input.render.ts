import type { InputArgs } from './input.types';

export const renderInput = ({ placeholder, value, disabled }: InputArgs): string => `
    <div class="form-block">
        <input
            class="form-control"
            type="text"
            placeholder="${placeholder}"
            value="${value}"
            ${disabled ? 'disabled' : ''}
        />
    </div>
`;

export const renderInputPlayground = (args: InputArgs): string => renderInput(args);
