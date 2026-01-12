export const renderUtilities = (): string => `
    <div class="form-block">
        <label class="form-label" for="utilities-name">Name</label>
        <input class="form-control" id="utilities-name" type="text" placeholder="Jane Doe" />
    </div>
    <div class="form-block">
        <label class="form-label" for="utilities-email">Email</label>
        <input class="form-control" id="utilities-email" type="email" placeholder="name@example.com" />
    </div>
`;

export const renderUtilitiesPlayground = (): string => renderUtilities();
