export const renderGrid = (): string => `
    <h2 class="h4 mt-0">Grid</h2>
    <div class="container">
        <div class="row">
            <div class="col-3">.col-3</div>
            <div class="col-3">.col-3</div>
            <div class="col-3">.col-3</div>
            <div class="col-3">.col-3</div>
            <div class="col-6">.col-6</div>
            <div class="col-6">.col-6</div>
            <div class="col-12">.col-12</div>
        </div>
        <p class="mt-2 text-gray mb-0">Columns reflow to full width on smaller breakpoints for effortless responsive layouts.</p>
    </div>
`;

export const renderGridPlayground = (): string => renderGrid();
