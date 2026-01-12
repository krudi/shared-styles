import type { Meta } from '@storybook/html-vite';

import type { SvgArgs } from './svg.types';

export const defaultArgs: SvgArgs = {
    label: 'Inline icon',
};

export const argTypes: Meta<SvgArgs>['argTypes'] = {
    label: { control: 'text' },
};
