import type { InputGroupArgs } from './input-group.types';

export const renderInputGroup = ({ value, placeholder }: InputGroupArgs): string => `
    <div class="form-input-group">
        <span class="form-input-group-text">@</span>
        <input class="form-control" type="text" placeholder="${placeholder}" value="${value}" />
        <button class="btn btn-primary" type="button">Go</button>
    </div>
`;

export const renderInputGroupPlayground = (args: InputGroupArgs): string => renderInputGroup(args);
