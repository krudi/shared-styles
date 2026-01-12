import type { Meta } from '@storybook/html-vite';

import { renderHorizontalLine } from './horizontal-line.render';
import type { HorizontalLineArgs } from './horizontal-line.types';

const meta: Meta<HorizontalLineArgs> = {
    title: 'Components/Horizontal Line',
    tags: ['autodocs'],
    render: renderHorizontalLine,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component:
                    'Single-purpose horizontal rule styled via tokens. Use <code>.hr</code> on an <code>&lt;hr&gt;</code> element.',
            },
        },
    },
};

export default meta;
export { Default, Playground } from './horizontal-line.playground';
