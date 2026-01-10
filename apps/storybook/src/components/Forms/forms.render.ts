import type { FormFieldArgs } from './forms.types';

export const renderFormField = ({ label, placeholder, helpText, required, state }: FormFieldArgs): string => `
    <div class="form-block">
        <label class="form-label" for="playground-input">
            ${label}${required ? ' <span class="form-label-required" aria-hidden="true">*</span>' : ''}
        </label>
        <input
            class="form-control"
            id="playground-input"
            name="playground-input"
            type="text"
            placeholder="${placeholder}"
            ${required ? 'required' : ''}
            ${state === 'error' ? 'aria-invalid="true"' : ''}
        />
        ${
            state === 'error'
                ? `<span class="form-text-error">${helpText}</span>`
                : `<span class="form-text-hint">${helpText}</span>`
        }
    </div>
`;
