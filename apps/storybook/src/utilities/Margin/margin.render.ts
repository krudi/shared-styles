export const renderMargin = (): string => `
    <h2 class="h4 mt-0">Margin helpers</h2>
    <div class="p-2 bg-white-100">
        <div class="mt-3 p-2 bg-white">.mt-3</div>
        <div class="mb-3 p-2 bg-white">.mb-3</div>
        <div class="mx-auto p-2 bg-white" style="width: 12rem;">.mx-auto</div>
    </div>
    <p class="mt-2 text-gray mb-0">Margin utilities map to the spacing scale for predictable layout adjustments.</p>
`;

export const renderMarginPlayground = (): string => renderMargin();
