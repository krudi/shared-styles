type Utility = {
    className: string;
    label: string;
};

const textUtilities: Utility[] = [
    { className: 'text-primary', label: '.text-primary' },
    { className: 'text-secondary', label: '.text-secondary' },
    { className: 'text-success', label: '.text-success' },
    { className: 'text-info', label: '.text-info' },
    { className: 'text-warning', label: '.text-warning' },
    { className: 'text-danger', label: '.text-danger' },
    { className: 'text-gray', label: '.text-gray' },
];

export const renderTextColors = () => `
    <h2 class="h4 mt-0">Text colors</h2>
    ${textUtilities
        .map(
            (utility) => `
        <p class="${utility.className} m-0">${utility.label} — keep semantic markup and apply the hue class as needed.</p>
    `
        )
        .join('')}
`;

export const renderTextColorsPlayground = (): string => renderTextColors();
