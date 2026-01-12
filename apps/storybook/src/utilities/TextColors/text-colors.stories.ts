import type { Meta } from '@storybook/html-vite';

import { renderTextColors } from './text-colors.render';
import type { TextColorsArgs } from './text-colors.types';

const meta: Meta<TextColorsArgs> = {
    title: 'Utilities/Text Colors',
    tags: ['autodocs'],
    render: renderTextColors,
    parameters: {
        docs: {
            description: {
                component:
                    'Text color helpers for semantic accents and status messaging.',
            },
        },
    },
};

export default meta;
export { Default, Playground } from './text-colors.playground';
