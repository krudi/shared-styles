import type { Meta } from '@storybook/html-vite';

import { renderMargin } from './margin.render';
import type { MarginArgs } from './margin.types';

const meta: Meta<MarginArgs> = {
    title: 'Utilities/Margin',
    tags: ['autodocs'],
    render: renderMargin,
    parameters: {
        docs: {
            description: {
                component:
                    'Margin helpers aligned to the spacing scale.',
            },
        },
    },
};

export default meta;
export { Default, Playground } from './margin.playground';
