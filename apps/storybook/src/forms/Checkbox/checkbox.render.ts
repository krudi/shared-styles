export const renderCheckbox = (): string => `
    <div class="form-block">
        <div class="form-checkbox">
            <input class="form-checkbox-input" id="checkbox-updates" type="checkbox" />
            <label class="form-checkbox-label" for="checkbox-updates">Send me updates</label>
        </div>
        <div class="form-checkbox">
            <input class="form-checkbox-input" id="checkbox-terms" type="checkbox" checked />
            <label class="form-checkbox-label" for="checkbox-terms">I agree to the terms</label>
        </div>
    </div>
`;

export const renderCheckboxPlayground = (): string => renderCheckbox();
