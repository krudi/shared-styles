import type { Meta } from '@storybook/html-vite';

import { renderLineClamp } from './line-clamp.render';
import type { LineClampArgs } from './line-clamp.types';

const meta: Meta<LineClampArgs> = {
    title: 'Utilities/Line Clamp',
    tags: ['autodocs'],
    render: renderLineClamp,
    parameters: {
        docs: {
            description: {
                component: 'Truncation helpers for multi-line text in cards and lists.',
            },
        },
    },
};

export default meta;
export { Default, Playground } from './line-clamp.playground';
