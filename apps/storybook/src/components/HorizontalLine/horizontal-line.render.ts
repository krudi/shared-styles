import type { HorizontalLineArgs } from './horizontal-line.types';

export const renderHorizontalLine = (): string => `
    <p>Sections can be separated with the design-token-driven horizontal rule.</p>
    <hr class="hr" />
    <p>Adjust <code>--hr-height</code>, <code>--hr-margin-block</code>, or <code>--hr-background-color</code> in your own layer to customise.</p>
`;

export const renderHorizontalLinePlayground = ({ beforeText, afterText }: HorizontalLineArgs): string => `
    <p>${beforeText}</p>
    <hr class="hr" />
    <p>${afterText}</p>
`;
