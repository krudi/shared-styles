import type { Meta } from '@storybook/html-vite';

import { renderList } from './list.render';
import type { ListArgs } from './list.types';

const meta: Meta<ListArgs> = {
    title: 'Components/List',
    tags: ['autodocs'],
    render: renderList,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component:
                    'Reset-style unordered list helper. Apply <code>.unordered-list</code> to remove default margins and control spacing yourself.',
            },
        },
    },
};

export default meta;
export { Default, Playground } from './list.playground';
