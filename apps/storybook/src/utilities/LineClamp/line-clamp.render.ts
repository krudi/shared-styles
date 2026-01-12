export const renderLineClamp = () => `
    <h2 class="h4 mt-0">Line clamp</h2>
    <p class="line-clamp-2 m-0 text-gray">This paragraph uses <code>.line-clamp-2</code> to demonstrate truncation. The utility keeps multi-line text tidy without extra markup or JavaScript.</p>
`;

export const renderLineClampPlayground = (): string => renderLineClamp();
