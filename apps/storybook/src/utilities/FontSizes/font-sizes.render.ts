type Utility = {
    className: string;
    label: string;
};

const fontSizes: Utility[] = [
    { className: 'text-xs', label: '.text-xs' },
    { className: 'text-sm', label: '.text-sm' },
    { className: 'text-md', label: '.text-md' },
    { className: 'text-lg', label: '.text-lg' },
    { className: 'text-xl', label: '.text-xl' },
];

export const renderFontSizes = () => `
    <h2 class="h4 mt-0">Font sizing</h2>
    ${fontSizes
        .map(
            (utility) => `
        <p class="${utility.className} m-0">Scale text with ${utility.label} while inheriting the base font family and weight.</p>
    `
        )
        .join('')}
`;

export const renderFontSizesPlayground = (): string => renderFontSizes();
