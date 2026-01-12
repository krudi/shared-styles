import type { Meta } from '@storybook/html-vite';

import { renderText } from './text.render';
import type { TextArgs } from './text.types';

const meta: Meta<TextArgs> = {
    title: 'Forms/Text',
    tags: ['autodocs'],
    render: renderText,
    parameters: {
        docs: {
            description: {
                component:
                    'Supportive form text styles for hints and validation messaging.',
            },
        },
    },
};

export default meta;
export { Default, Playground } from './text.playground';
