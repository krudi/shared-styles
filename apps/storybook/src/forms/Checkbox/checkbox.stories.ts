import type { Meta } from '@storybook/html-vite';

import { renderCheckbox } from './checkbox.render';
import type { CheckboxArgs } from './checkbox.types';

const meta: Meta<CheckboxArgs> = {
    title: 'Forms/Checkbox',
    tags: ['autodocs'],
    render: renderCheckbox,
    parameters: {
        docs: {
            description: {
                component:
                    'Checkbox styling for multi-select inputs.',
            },
        },
    },
};

export default meta;
export { Default, Playground } from './checkbox.playground';
