import type { Meta } from '@storybook/html-vite';

import { renderRadio } from './radio.render';
import type { RadioArgs } from './radio.types';

const meta: Meta<RadioArgs> = {
    title: 'Forms/Radio',
    tags: ['autodocs'],
    render: renderRadio,
    parameters: {
        docs: {
            description: {
                component:
                    'Radio styling for single-select inputs.',
            },
        },
    },
};

export default meta;
export { Default, Playground } from './radio.playground';
