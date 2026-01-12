export const renderTypography = (): string => `
    <h1 class="mt-0">Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
    <p class="p">Body text using base variables with comfortable line height and muted color.</p>
    <p><a href="https://example.com" target="_blank" rel="noreferrer">External link</a></p>
    <p><a href="mailto:hello@example.com">Mail link</a></p>
    <p><a href="tel:+123456789">Phone link</a></p>
`;

export const renderTypographyPlayground = (): string => renderTypography();
