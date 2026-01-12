import type { Meta } from '@storybook/html-vite';

import { renderTextDecoration } from './text-decoration.render';
import type { TextDecorationArgs } from './text-decoration.types';

const meta: Meta<TextDecorationArgs> = {
    title: 'Utilities/Text Decoration',
    tags: ['autodocs'],
    render: renderTextDecoration,
    parameters: {
        docs: {
            description: {
                component: 'Decoration helpers for text emphasis and inline styling.',
            },
        },
    },
};

export default meta;
export { Default, Playground } from './text-decoration.playground';
