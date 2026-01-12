import type { Meta } from '@storybook/html-vite';

import type { ImgArgs } from './img.types';

export const defaultArgs: ImgArgs = {
    alt: 'Sample image with rounded corners',
};

export const argTypes: Meta<ImgArgs>['argTypes'] = {
    alt: { control: 'text' },
};
