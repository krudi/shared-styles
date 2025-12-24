const textUtilities = [
    { className: 'text-primary', label: '.text-primary' },
    { className: 'text-secondary', label: '.text-secondary' },
    { className: 'text-success', label: '.text-success' },
    { className: 'text-info', label: '.text-info' },
    { className: 'text-warning', label: '.text-warning' },
    { className: 'text-danger', label: '.text-danger' },
    { className: 'text-gray', label: '.text-gray' },
];

const fontSizes = [
    { className: 'text-xs', label: '.text-xs' },
    { className: 'text-sm', label: '.text-sm' },
    { className: 'text-md', label: '.text-md' },
    { className: 'text-lg', label: '.text-lg' },
    { className: 'text-xl', label: '.text-xl' },
];

const UtilitiesTemplate = () => `
    <main class="main" style="padding: var(--spacer-3); display: grid; gap: var(--spacer-3);">
        <section style="border: 1px solid var(--c-white-200); border-radius: var(--border-radius-md); padding: var(--spacer-2); box-shadow: var(--box-shadow-default);">
            <h2 class="h4 mt-0">Text colors</h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: var(--spacer-1);">
                ${textUtilities
                    .map(
                        (utility) => `
                    <p class="${utility.className} m-0">${utility.label} — keep semantic markup and apply the hue class as needed.</p>
                `,
                    )
                    .join('')}
            </div>
        </section>
        <section style="border: 1px solid var(--c-white-200); border-radius: var(--border-radius-md); padding: var(--spacer-2); box-shadow: var(--box-shadow-default);">
            <h2 class="h4 mt-0">Font sizing</h2>
            <div style="display: grid; gap: var(--spacer-n1);">
                ${fontSizes
                    .map(
                        (utility) => `
                    <p class="${utility.className} m-0">Scale text with ${utility.label} while inheriting the base font family and weight.</p>
                `,
                    )
                    .join('')}
            </div>
        </section>
        <section style="border: 1px solid var(--c-white-200); border-radius: var(--border-radius-md); padding: var(--spacer-2); box-shadow: var(--box-shadow-default);">
            <h2 class="h4 mt-0">Spacing helpers</h2>
            <div style="display: grid; gap: var(--spacer-1);">
                <div class="p-1 bg-white-100" style="border: 1px dashed var(--c-primary); border-radius: var(--border-radius-sm);">.p-1</div>
                <div class="p-2 bg-white-100" style="border: 1px dashed var(--c-primary); border-radius: var(--border-radius-sm);">.p-2</div>
                <div class="p-3 bg-white-100" style="border: 1px dashed var(--c-primary); border-radius: var(--border-radius-sm);">.p-3</div>
                <div class="p-4 bg-white-100" style="border: 1px dashed var(--c-primary); border-radius: var(--border-radius-sm);">.p-4</div>
            </div>
            <p class="mt-2 text-gray mb-0">Padding, margin, and shorthand utilities align to the tokenized spacing scale so components stay consistent.</p>
        </section>
        <section style="border: 1px solid var(--c-white-200); border-radius: var(--border-radius-md); padding: var(--spacer-2); box-shadow: var(--box-shadow-default);">
            <h2 class="h4 mt-0">Line clamp</h2>
            <p class="line-clamp-2 m-0 text-gray" style="max-width: 48ch;">This paragraph uses <code>.line-clamp-2</code> to demonstrate truncation. The utility keeps multi-line text tidy without extra markup or JavaScript.</p>
        </section>
    </main>
`;

export default {
    title: 'Utilities/Helpers',
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Utility classes that layer on top of the base styles for rapid prototyping: text colors, size helpers, spacing, and line clamping.',
            },
        },
    },
};

export const Helpers = {
    render: UtilitiesTemplate,
    name: 'Utility helpers',
    parameters: {
        docs: {
            description: {
                story: 'Compose these helpers with semantic HTML to keep markup lean while staying on the design system spacing and typography scales.',
            },
        },
    },
};
