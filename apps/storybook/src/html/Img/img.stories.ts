import type { Meta } from '@storybook/html-vite';

import { renderImg } from './img.render';
import type { ImgArgs } from './img.types';

const meta: Meta<ImgArgs> = {
    title: 'HTML/Image',
    tags: ['autodocs'],
    render: renderImg,
    parameters: {
        docs: {
            description: {
                component: 'Responsive image styling with default border radius.',
            },
        },
    },
};

export default meta;
export { Default, Playground } from './img.playground';
