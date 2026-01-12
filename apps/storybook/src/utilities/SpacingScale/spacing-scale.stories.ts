import type { Meta } from '@storybook/html-vite';

import { renderSpacingScale } from './spacing-scale.render';
import type { SpacingScaleArgs } from './spacing-scale.types';

const meta: Meta<SpacingScaleArgs> = {
    title: 'Utilities/Spacing Scale',
    tags: ['autodocs'],
    render: renderSpacingScale,
    parameters: {
        docs: {
            description: {
                component:
                    'Tokenized spacing scale that powers the margin and padding helpers.',
            },
        },
    },
};

export default meta;
export { Default, Playground } from './spacing-scale.playground';
