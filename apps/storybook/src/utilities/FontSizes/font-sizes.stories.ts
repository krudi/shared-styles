import type { Meta } from '@storybook/html-vite';

import { renderFontSizes } from './font-sizes.render';
import type { FontSizesArgs } from './font-sizes.types';

const meta: Meta<FontSizesArgs> = {
    title: 'Utilities/Font Sizes',
    tags: ['autodocs'],
    render: renderFontSizes,
    parameters: {
        docs: {
            description: {
                component: 'Quick size adjustments that map to the typography scale.',
            },
        },
    },
};

export default meta;
export { Default, Playground } from './font-sizes.playground';
