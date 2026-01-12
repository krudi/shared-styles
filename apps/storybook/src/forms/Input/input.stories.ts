import type { Meta } from '@storybook/html-vite';

import { renderInput } from './input.render';
import type { InputArgs } from './input.types';

const meta: Meta<InputArgs> = {
    title: 'Forms/Input',
    tags: ['autodocs'],
    render: renderInput,
    parameters: {
        docs: {
            description: {
                component: 'Text input field styled by the forms layer tokens.',
            },
        },
    },
};

export default meta;
export { Default, Playground } from './input.playground';
