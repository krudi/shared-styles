import type { Meta, StoryObj } from '@storybook/html-vite';

import type { ColorsArgs } from './colors.types';

const meta = {
    title: 'Theme/Colors',
    tags: ['autodocs'],
    render: (): string => `
        ${[
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
        ]
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
    `,
    parameters: {
        docs: {
            description: {
                component:
                    'Theme palette values mapped to utility classes. Each swatch pulls directly from the CSS custom property so the preview stays aligned with the token source.',
            },
        },
    },
} satisfies Meta<ColorsArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Use the <code>bg-*</code> helpers to apply the palette to blocks while preserving accessible text contrast via paired emphasis colors.',
            },
        },
    },
};

export const Playground: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Review palette balance and usage notes as you adjust theme tokens.',
            },
        },
    },
};
