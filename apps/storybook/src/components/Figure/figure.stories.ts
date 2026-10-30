import type { Meta, StoryObj } from '@storybook/html-vite';

import type { FigureArgs } from './figure.types';

const image = (width: number, height: number): string => {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><defs><linearGradient id="g" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#1d4ed8"/><stop offset="1" stop-color="#14b8a6"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#g)"/><circle cx="${width * 0.7}" cy="${height * 0.35}" r="${height * 0.22}" fill="#facc15" fill-opacity="0.9"/><path d="M0 ${height} L${width * 0.35} ${height * 0.55} L${width * 0.6} ${height * 0.8} L${width} ${height * 0.5} V${height} Z" fill="#0f172a" fill-opacity="0.35"/></svg>`;

    return `
        <img
            src="data:image/svg+xml,${encodeURIComponent(svg)}"
            width="${width}"
            height="${height}"
            alt="Abstract illustration with a blue to teal gradient, a yellow sun and dark hills"
            loading="lazy"
        />
    `;
};

const meta = {
    title: 'Components/Figure',
    render: ({ caption, fluid, linked }: FigureArgs): string => `
        <figure class="figure${fluid ? ' figure-fluid' : ''}">
            ${linked ? `<a href="#full-size" aria-label="Open the full-size image">${image(640, 360)}</a>` : image(640, 360)}
            ${caption ? `<figcaption class="figure-caption">${caption}</figcaption>` : ''}
        </figure>
    `,
    args: {
        caption: 'Figure 1: The new civic centre opens in spring. Photo: City archive.',
        fluid: false,
        linked: false,
    },
    argTypes: {
        caption: { control: 'text' },
        fluid: { control: 'boolean' },
        linked: { control: 'boolean' },
    },
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: `Figure — an image, chart or media element with an optional caption. Always set \`alt\` on the image; the caption adds context such as source or licence, it does not replace the alternative text. Use \`figure-fluid\` to stretch the media to the container width, otherwise the figure shrinks to the intrinsic size of the image.

Design tokens are documented below.`,
            },
        },
    },
} satisfies Meta<FigureArgs>;

export default meta;

type Story = StoryObj<FigureArgs>;

export const Default: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Intrinsic size with a caption.',
            },
        },
    },
};

export const Fluid: Story = {
    args: { fluid: true },
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Stretches to the full container width.',
            },
        },
    },
};

export const Linked: Story = {
    args: { linked: true },
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Image wrapped in a link, for example to a full-size version.',
            },
        },
    },
};
