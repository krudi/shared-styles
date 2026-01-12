type Utility = {
    className: string;
    label: string;
};

const fontWeights: Utility[] = [
    { className: 'fw-300', label: '.fw-300' },
    { className: 'fw-400', label: '.fw-400' },
    { className: 'fw-500', label: '.fw-500' },
    { className: 'fw-600', label: '.fw-600' },
    { className: 'fw-700', label: '.fw-700' },
];

export const renderFontWeights = () => `
    <h2 class="h4 mt-0">Font weights</h2>
    ${fontWeights
        .map(
            (utility) => `
        <p class="${utility.className} m-0">Weight sample with ${utility.label} for emphasis and hierarchy.</p>
    `
        )
        .join('')}
`;

export const renderFontWeightsPlayground = (): string => renderFontWeights();
