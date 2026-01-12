import type { Meta } from '@storybook/html-vite';

import { renderTypography } from './typography.render';
import type { TypographyArgs } from './typography.types';

const meta: Meta<TypographyArgs> = {
    title: 'Base/Typography',
    tags: ['autodocs'],
    render: renderTypography,
    parameters: {
        docs: {
            description: {
                component:
                    'Headings, paragraphs, and link treatments driven by the base type scale and link variables.',
            },
        },
    },
};

export default meta;
export { Default, Playground } from './typography.playground';
