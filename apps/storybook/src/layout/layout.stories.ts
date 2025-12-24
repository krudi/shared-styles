import type { Meta, StoryObj } from '@storybook/html';

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
    <main class="main" style="padding: var(--spacer-3); display: grid; gap: var(--spacer-3);">
        <section style="border: 1px solid var(--c-white-200); border-radius: var(--border-radius-md); padding: var(--spacer-2); box-shadow: var(--box-shadow-default);">
            <h2 class="h4 mt-0">Spacing scale</h2>
            <div style="display: grid; gap: var(--spacer-1);">
                ${spacingScale
                    .map(
                        (spacing) => `
                    <div style="display: grid; grid-template-columns: 180px 1fr; align-items: center; gap: var(--spacer-1);">
                        <span style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace; font-size: var(--fs-sm);">${spacing.token}</span>
                        <div style="display: flex; align-items: center; gap: var(--spacer);">
                            <div style="height: 0.75rem; min-width: var(${spacing.token}); max-width: calc(var(${spacing.token}) * 8); width: calc(var(${spacing.token}) * 5); background: var(--c-white-200); border-radius: var(--border-radius-full);"></div>
                            <span class="text-gray">${spacing.label}</span>
                        </div>
                    </div>
                `,
                    )
                    .join('')}
            </div>
        </section>
        <section style="border: 1px solid var(--c-white-200); border-radius: var(--border-radius-md); padding: var(--spacer-2); box-shadow: var(--box-shadow-default);">
            <h2 class="h4 mt-0">Grid and container</h2>
            <div class="container" style="padding: var(--spacer-2); background: var(--c-white-100); border-radius: var(--border-radius-md); border: 1px dashed var(--c-primary);">
                <p class="m-0 text-gray">`.container` recenters content and constrains it to the design width.</p>
            </div>
            <div class="row mt-2" style="gap: var(--spacer-1);">
                <div class="col-3" style="background: var(--c-white-100); border: 1px solid var(--c-white-200); padding: var(--spacer-1); border-radius: var(--border-radius-sm); text-align: center;">.col-3</div>
                <div class="col-3" style="background: var(--c-white-100); border: 1px solid var(--c-white-200); padding: var(--spacer-1); border-radius: var(--border-radius-sm); text-align: center;">.col-3</div>
                <div class="col-3" style="background: var(--c-white-100); border: 1px solid var(--c-white-200); padding: var(--spacer-1); border-radius: var(--border-radius-sm); text-align: center;">.col-3</div>
                <div class="col-3" style="background: var(--c-white-100); border: 1px solid var(--c-white-200); padding: var(--spacer-1); border-radius: var(--border-radius-sm); text-align: center;">.col-3</div>
                <div class="col-6" style="background: var(--c-white-100); border: 1px solid var(--c-white-200); padding: var(--spacer-1); border-radius: var(--border-radius-sm); text-align: center;">.col-6</div>
                <div class="col-6" style="background: var(--c-white-100); border: 1px solid var(--c-white-200); padding: var(--spacer-1); border-radius: var(--border-radius-sm); text-align: center;">.col-6</div>
                <div class="col-12" style="background: var(--c-white-100); border: 1px solid var(--c-white-200); padding: var(--spacer-1); border-radius: var(--border-radius-sm); text-align: center;">.col-12</div>
            </div>
            <p class="mt-2 text-gray mb-0">Columns reflow to full width on smaller breakpoints for effortless responsive layouts.</p>
        </section>
    </main>
`;

const meta: Meta = {
    title: 'Foundations/Layout',
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Spacing tokens and grid helpers for building responsive layouts. The preview uses the same CSS custom properties as production styles.',
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
