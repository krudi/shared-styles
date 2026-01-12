export const renderRadio = (): string => `
    <div class="form-block">
        <div class="form-radio">
            <input class="form-radio-input" id="radio-monthly" name="billing" type="radio" checked />
            <label class="form-radio-label" for="radio-monthly">Monthly billing</label>
        </div>
        <div class="form-radio">
            <input class="form-radio-input" id="radio-annual" name="billing" type="radio" />
            <label class="form-radio-label" for="radio-annual">Annual billing</label>
        </div>
    </div>
`;

export const renderRadioPlayground = (): string => renderRadio();
