import type { Meta } from '@storybook/html-vite';

import { badgeVariants } from './badges.render';
import type { BadgeArgs } from './badges.types';

export const defaultArgs: BadgeArgs = {
    label: 'Notify',
    variant: 'primary',
};

export const argTypes: Meta<BadgeArgs>['argTypes'] = {
    variant: {
        control: { type: 'select' },
        options: badgeVariants.map((badge) => badge.className.replace('badge-', '')),
    },
    label: { control: 'text' },
};
