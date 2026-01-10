import type { Meta, StoryObj } from '@storybook/html-vite';

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

const LayoutTemplate = () => `
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
    <h2 class="h4 mt-0">Grid and container</h2>
    <div class="container">
        <p class="m-0 text-gray"><code>.container</code> recenters content and constrains it to the design width.</p>
        <div class="row mt-2">
            <div class="col-3">.col-3</div>
            <div class="col-3">.col-3</div>
            <div class="col-3">.col-3</div>
            <div class="col-3">.col-3</div>
            <div class="col-6">.col-6</div>
            <div class="col-6">.col-6</div>
            <div class="col-12">.col-12</div>
        </div>
        <p class="mt-2 text-gray mb-0">Columns reflow to full width on smaller breakpoints for effortless responsive layouts.</p>
    </div>
`;

const meta: Meta = {
    title: 'Foundations/Layout',
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component:
                    'Spacing tokens and grid helpers for building responsive layouts. The preview uses the same CSS custom properties as production styles.',
            },
        },
    },
};
export default meta;

type Story = StoryObj;

export const LayoutSystem: Story = {
    render: LayoutTemplate,
    name: 'Spacing and grid',
    parameters: {
        docs: {
            description: {
                story: 'Compose <code>.container</code>, <code>.row</code>, and <code>.col-*</code> classes with the spacing scale to enforce consistent rhythm.',
            },
        },
    },
};
