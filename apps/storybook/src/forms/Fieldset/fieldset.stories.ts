import type { Meta } from '@storybook/html-vite';

import { renderFieldset } from './fieldset.render';
import type { FieldsetArgs } from './fieldset.types';

const meta: Meta<FieldsetArgs> = {
    title: 'Forms/Fieldset',
    tags: ['autodocs'],
    render: renderFieldset,
    parameters: {
        docs: {
            description: {
                component:
                    'Fieldset container styling for grouped form sections.',
            },
        },
    },
};

export default meta;
export { Default, Playground } from './fieldset.playground';
