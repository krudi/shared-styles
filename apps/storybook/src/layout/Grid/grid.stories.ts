import type { Meta } from '@storybook/html-vite';

import { renderGrid } from './grid.render';
import type { GridArgs } from './grid.types';

const meta: Meta<GridArgs> = {
    title: 'Layout/Grid',
    tags: ['autodocs'],
    render: renderGrid,
    parameters: {
        docs: {
            description: {
                component: 'Grid helpers for responsive page composition.',
            },
        },
    },
};

export default meta;
export { Grid } from './grid.playground';
