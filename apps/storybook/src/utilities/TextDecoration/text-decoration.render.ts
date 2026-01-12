type Utility = {
    className: string;
    label: string;
};

const textDecorations: Utility[] = [
    { className: 'text-decoration-none', label: '.text-decoration-none' },
    { className: 'text-decoration-underline', label: '.text-decoration-underline' },
    { className: 'text-decoration-line-through', label: '.text-decoration-line-through' },
    { className: 'text-decoration-wavy', label: '.text-decoration-wavy' },
];

export const renderTextDecoration = () => `
    <h2 class="h4 mt-0">Text decoration</h2>
    ${textDecorations
        .map(
            (utility) => `
        <p class="${utility.className} m-0">Utility sample ${utility.label} on inline text.</p>
    `
        )
        .join('')}
`;

export const renderTextDecorationPlayground = (): string => renderTextDecoration();
