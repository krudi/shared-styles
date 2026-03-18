import type { Meta, StoryObj } from '@storybook/html-vite';

import type { ColorsArgs } from './colors.types';

const meta = {
    title: 'Theme/Colors',
    tags: ['autodocs'],
    render: (): string => `
        ${[
            {
                label: 'Primary',
                className: 'bg-black',
                token: '--primary',
                usage: 'High-emphasis actions and surfaces.',
            },
            {
                label: 'Secondary',
                className: 'bg-secondary',
                token: '--secondary',
                usage: 'Supporting actions and complementary surfaces.',
            },
            {
                label: 'Muted',
                className: 'bg-gray',
                token: '--muted-foreground',
                usage: 'Muted body text and secondary UI.',
            },
            {
                label: 'Background',
                className: 'bg-white',
                token: '--background',
                usage: 'Base background with strong contrast against text.',
            },
            {
                label: 'Surface',
                className: 'bg-white-100',
                token: '--surface-subtle',
                usage: 'Subtle containers and raised neutral surfaces.',
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
                    'Semantic theme tokens mapped to utility classes. Override these semantic roles for normal theme changes. Override the palette layer only for advanced base-color customization.',
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
                story: 'Use the semantic theme tokens as the theming API. Utility classes remain for previewing the current mappings, but components should consume semantic roles rather than color-name tokens.',
            },
        },
    },
};

export const Playground: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Review the semantic mappings while adjusting the theme. Change semantic tokens first; touch the palette layer only when you intentionally want to rebuild the color foundation.',
            },
        },
    },
};
