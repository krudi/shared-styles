import type { Meta } from '@storybook/html-vite';

import { renderLabel } from './label.render';
import type { LabelArgs } from './label.types';

const meta: Meta<LabelArgs> = {
    title: 'Forms/Label',
    tags: ['autodocs'],
    render: renderLabel,
    parameters: {
        docs: {
            description: {
                component:
                    'Label styling for form fields with optional required indicators.',
            },
        },
    },
};

export default meta;
export { Default, Playground } from './label.playground';
