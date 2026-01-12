import type { Meta } from '@storybook/html-vite';

import { renderPadding } from './padding.render';
import type { PaddingArgs } from './padding.types';

const meta: Meta<PaddingArgs> = {
    title: 'Utilities/Padding',
    tags: ['autodocs'],
    render: renderPadding,
    parameters: {
        docs: {
            description: {
                component:
                    'Padding helpers aligned to the spacing scale.',
            },
        },
    },
};

export default meta;
export { Default, Playground } from './padding.playground';
