import type { Meta, StoryObj } from '@storybook/html-vite';

import type { ImgArgs } from './img.types';

const meta = {
    title: 'HTML/Image',
    render: ({ alt }: ImgArgs): string => `
        <picture>
            <img src="https://placehold.co/600x400" alt="${alt}" />
        </picture>
    `,
    args: {
        alt: 'Sample image with rounded corners',
    },
    argTypes: {
        alt: { control: 'text' },
    },
    parameters: {
        docs: {
            description: {
                component: `Image — purpose-driven component from the design system. Use this component for its primary role in the UI, follow the system tokens for spacing and colour, and ensure a clear accessible name is provided. Follow keyboard and screen-reader best practices when the component is interactive.

Design tokens: see the Tokens story under the theme section (theme/Tokens) for reference to CSS variables and token names.`,
            },
        },
    },
} satisfies Meta<ImgArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Images inherit responsive sizing and a small border radius.',
            },
        },
    },
};
