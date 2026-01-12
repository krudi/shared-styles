import type { Meta } from '@storybook/html-vite';

import { renderInputGroup } from './input-group.render';
import type { InputGroupArgs } from './input-group.types';

const meta: Meta<InputGroupArgs> = {
    title: 'Forms/Input Group',
    tags: ['autodocs'],
    render: renderInputGroup,
    parameters: {
        docs: {
            description: {
                component: 'Inline input groups for appended or prepended content.',
            },
        },
    },
};

export default meta;
export { Default, Playground } from './input-group.playground';
