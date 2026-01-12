export const renderFieldset = (): string => `
    <fieldset class="fieldset">
        <legend class="legend">Contact preferences</legend>
        <div class="form-block">
            <label class="form-label" for="fieldset-email">Email</label>
            <input class="form-control" id="fieldset-email" type="email" placeholder="name@example.com" />
        </div>
        <div class="form-block">
            <label class="form-label" for="fieldset-phone">Phone</label>
            <input class="form-control" id="fieldset-phone" type="tel" placeholder="+1 234 567 890" />
        </div>
    </fieldset>
`;

export const renderFieldsetPlayground = (): string => renderFieldset();
