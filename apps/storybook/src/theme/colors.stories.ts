import type { Meta, StoryObj } from '@storybook/html-vite';

type Swatch = {
    label: string;
    className: string;
    token: string;
    usage: string;
};

const swatches: Swatch[] = [
    {
        label: 'Primary',
        className: 'bg-primary',
        token: '--c-primary',
        usage: 'Brand moments and primary actions.',
    },
    {
        label: 'Secondary',
        className: 'bg-secondary',
        token: '--c-secondary',
        usage: 'Supporting actions and complementary surfaces.',
    },
    {
        label: 'Success',
        className: 'bg-success',
        token: '--c-success',
        usage: 'Positive feedback such as confirmations.',
    },
    {
        label: 'Info',
        className: 'bg-info',
        token: '--c-info',
        usage: 'Neutral highlights or informational banners.',
    },
    {
        label: 'Warning',
        className: 'bg-warning',
        token: '--c-warning',
        usage: 'Cautionary notices and non-blocking alerts.',
    },
    {
        label: 'Danger',
        className: 'bg-danger',
        token: '--c-danger',
        usage: 'Errors, destructive actions, and blockers.',
    },
    {
        label: 'Gray',
        className: 'bg-gray',
        token: '--c-gray',
        usage: 'Muted body text and secondary UI.',
    },
    {
        label: 'White',
        className: 'bg-white',
        token: '--c-white',
        usage: 'Base background with strong contrast against text.',
    },
    {
        label: 'Black',
        className: 'bg-black',
        token: '--c-black',
        usage: 'Primary text and dark surfaces.',
    },
];

const SwatchGrid = () => `
    ${swatches
        .map(
            (swatch) => `
        <article>
            <div class="${swatch.className}">
                <span>${swatch.label}</span>
                <span>${swatch.token}</span>
            </div>
            <div class="p-2 text-gray">${swatch.usage}</div>
        </article>
    `
        )
        .join('')}
`;

const meta: Meta = {
    title: 'Foundations/Colors',
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component:
                    'Theme palette values mapped to utility classes. Each swatch pulls directly from the CSS custom property so the preview stays aligned with the token source.',
            },
        },
    },
};
export default meta;

type Story = StoryObj;

export const Palette: Story = {
    render: SwatchGrid,
    name: 'Theme palette',
    parameters: {
        docs: {
            description: {
                story: 'Use the <code>bg-*</code> helpers to apply the palette to blocks while preserving accessible text contrast via paired emphasis colors.',
            },
        },
    },
};
