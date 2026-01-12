import type { Meta } from '@storybook/html-vite';

import type { LegendArgs } from './legend.types';

export const defaultArgs: LegendArgs = {
    text: 'Payment details',
};

export const argTypes: Meta<LegendArgs>['argTypes'] = {
    text: { control: 'text' },
};
