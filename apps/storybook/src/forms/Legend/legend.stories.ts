import type { Meta } from '@storybook/html-vite';

import { renderLegend } from './legend.render';
import type { LegendArgs } from './legend.types';

const meta: Meta<LegendArgs> = {
    title: 'Forms/Legend',
    tags: ['autodocs'],
    render: renderLegend,
    parameters: {
        docs: {
            description: {
                component: 'Legend styling for fieldset headings and grouped labels.',
            },
        },
    },
};

export default meta;
export { Default, Playground } from './legend.playground';
