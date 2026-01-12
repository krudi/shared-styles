import type { Meta } from '@storybook/html-vite';

import { renderBackgroundColors } from './background-colors.render';
import type { BackgroundColorsArgs } from './background-colors.types';

const meta: Meta<BackgroundColorsArgs> = {
    title: 'Utilities/Background Colors',
    tags: ['autodocs'],
    render: renderBackgroundColors,
    parameters: {
        docs: {
            description: {
                component: 'Background color utilities with built-in contrast emphasis for text.',
            },
        },
    },
};

export default meta;
export { Default, Playground } from './background-colors.playground';
