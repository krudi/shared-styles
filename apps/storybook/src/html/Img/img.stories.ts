import type { Meta, StoryObj } from '@storybook/html-vite';

import type { ImgArgs } from './img.types';

const meta = {
    title: 'HTML/Image',
    tags: ['autodocs'],
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
                component: 'Responsive image styling with default border radius.',
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

export const Playground: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Update the alt text to verify accessibility labels.',
            },
        },
    },
};
