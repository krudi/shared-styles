import type { Meta } from '@storybook/html-vite';

import { renderBadges } from './badges.render';
import type { BadgeArgs } from './badges.types';

const meta: Meta<BadgeArgs> = {
    title: 'Components/Badges',
    tags: ['autodocs'],
    render: renderBadges,
    parameters: {
        docs: {
            description: {
                component:
                    'Status and taxonomy chips built on the design token radius, padding, and font sizing. Variants align to the theme palette.',
            },
        },
    },
};

export default meta;
export { Default, Playground } from './badges.playground';
