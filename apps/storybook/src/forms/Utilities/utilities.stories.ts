import type { Meta } from '@storybook/html-vite';

import { renderUtilities } from './utilities.render';
import type { UtilitiesArgs } from './utilities.types';

const meta: Meta<UtilitiesArgs> = {
    title: 'Forms/Utilities',
    tags: ['autodocs'],
    render: renderUtilities,
    parameters: {
        docs: {
            description: {
                component: 'Layout utility helpers for stacking form controls.',
            },
        },
    },
};

export default meta;
export { Default, Playground } from './utilities.playground';
