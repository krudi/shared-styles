type SpacingToken = {
    token: string;
    label: string;
};

const spacingScale: SpacingToken[] = [
    { token: '--spacer-n2', label: 'Tight padding/margins for dense UI' },
    { token: '--spacer-n1', label: 'Subhead spacing or compact chips' },
    { token: '--spacer', label: 'Base spacing for paragraphs and list items' },
    { token: '--spacer-1', label: 'Cards, small component gutters' },
    { token: '--spacer-2', label: 'Section padding and layouts' },
    { token: '--spacer-3', label: 'Large spacing for hero or page rails' },
    { token: '--spacer-4', label: 'Page-level vertical rhythm and grids' },
];

export const renderSpacingScale = () => `
    <h2 class="h4 mt-0">Spacing scale</h2>
    ${spacingScale
        .map(
            (spacing) => `
        <p class="m-0">
            <code>${spacing.token}</code>
            <span class="text-gray">${spacing.label}</span>
        </p>
    `
        )
        .join('')}
`;

export const renderSpacingScalePlayground = (): string => renderSpacingScale();
