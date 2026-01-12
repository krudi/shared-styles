import type { Meta } from '@storybook/html-vite';

import { renderColors } from './colors.render';
import type { ColorsArgs } from './colors.types';

const meta: Meta<ColorsArgs> = {
    title: 'Theme/Colors',
    tags: ['autodocs'],
    render: renderColors,
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
export { Default, Playground } from './colors.playground';
