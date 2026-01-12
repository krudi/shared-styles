type Utility = {
    className: string;
    label: string;
};

const backgroundUtilities: Utility[] = [
    { className: 'bg-white', label: '.bg-white' },
    { className: 'bg-white-100', label: '.bg-white-100' },
    { className: 'bg-white-200', label: '.bg-white-200' },
    { className: 'bg-black', label: '.bg-black' },
    { className: 'bg-gray', label: '.bg-gray' },
    { className: 'bg-beige', label: '.bg-beige' },
    { className: 'bg-primary', label: '.bg-primary' },
    { className: 'bg-secondary', label: '.bg-secondary' },
    { className: 'bg-success', label: '.bg-success' },
    { className: 'bg-info', label: '.bg-info' },
    { className: 'bg-warning', label: '.bg-warning' },
    { className: 'bg-danger', label: '.bg-danger' },
];

export const renderBackgroundColors = () => `
    <h2 class="h4 mt-0">Background colors</h2>
    <div class="row">
        ${backgroundUtilities
            .map(
                (utility) => `
            <div class="col-3">
                <div class="${utility.className} p-2">${utility.label}</div>
            </div>
        `
            )
            .join('')}
    </div>
`;

export const renderBackgroundColorsPlayground = (): string => renderBackgroundColors();
