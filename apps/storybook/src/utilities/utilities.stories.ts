import type { Meta, StoryObj } from '@storybook/html-vite';

type Utility = {
    className: string;
    label: string;
};

const textUtilities: Utility[] = [
    { className: 'text-primary', label: '.text-primary' },
    { className: 'text-secondary', label: '.text-secondary' },
    { className: 'text-success', label: '.text-success' },
    { className: 'text-info', label: '.text-info' },
    { className: 'text-warning', label: '.text-warning' },
    { className: 'text-danger', label: '.text-danger' },
    { className: 'text-gray', label: '.text-gray' },
];

const fontSizes: Utility[] = [
    { className: 'text-xs', label: '.text-xs' },
    { className: 'text-sm', label: '.text-sm' },
    { className: 'text-md', label: '.text-md' },
    { className: 'text-lg', label: '.text-lg' },
    { className: 'text-xl', label: '.text-xl' },
];

const UtilitiesTemplate = () => `
    <h2 class="h4 mt-0">Text colors</h2>
    ${textUtilities
        .map(
            (utility) => `
        <p class="${utility.className} m-0">${utility.label} — keep semantic markup and apply the hue class as needed.</p>
    `
        )
        .join('')}
    <h2 class="h4 mt-0">Font sizing</h2>
    ${fontSizes
        .map(
            (utility) => `
        <p class="${utility.className} m-0">Scale text with ${utility.label} while inheriting the base font family and weight.</p>
    `
        )
        .join('')}
    <h2 class="h4 mt-0">Spacing helpers</h2>
    <div class="p-1 bg-white-100">.p-1</div>
    <div class="p-2 bg-white-100">.p-2</div>
    <div class="p-3 bg-white-100">.p-3</div>
    <div class="p-4 bg-white-100">.p-4</div>
    <p class="mt-2 text-gray mb-0">Padding, margin, and shorthand utilities align to the tokenized spacing scale so components stay consistent.</p>
    <h2 class="h4 mt-0">Line clamp</h2>
    <p class="line-clamp-2 m-0 text-gray">This paragraph uses <code>.line-clamp-2</code> to demonstrate truncation. The utility keeps multi-line text tidy without extra markup or JavaScript.</p>
`;

const meta: Meta = {
    title: 'Utilities/Helpers',
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component:
                    'Utility classes that layer on top of the base styles for rapid prototyping: text colors, size helpers, spacing, and line clamping.',
            },
        },
    },
};
export default meta;

type Story = StoryObj;

export const Helpers: Story = {
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
