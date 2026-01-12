import type { Meta } from '@storybook/html-vite';

import { renderSvg } from './svg.render';
import type { SvgArgs } from './svg.types';

const meta: Meta<SvgArgs> = {
    title: 'HTML/Svg',
    tags: ['autodocs'],
    render: renderSvg,
    parameters: {
        docs: {
            description: {
                component: 'Base SVG styling for icons and inline vector graphics.',
            },
        },
    },
};

export default meta;
export { Default, Playground } from './svg.playground';
