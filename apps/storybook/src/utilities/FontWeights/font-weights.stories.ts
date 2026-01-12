import type { Meta } from '@storybook/html-vite';

import { renderFontWeights } from './font-weights.render';
import type { FontWeightsArgs } from './font-weights.types';

const meta: Meta<FontWeightsArgs> = {
    title: 'Utilities/Font Weights',
    tags: ['autodocs'],
    render: renderFontWeights,
    parameters: {
        docs: {
            description: {
                component: 'Weight utilities for emphasis, hierarchy, and readability.',
            },
        },
    },
};

export default meta;
export { Default, Playground } from './font-weights.playground';
