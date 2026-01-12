import type { Meta } from '@storybook/html-vite';

import type { LabelArgs } from './label.types';

export const defaultArgs: LabelArgs = {
    text: 'Email address',
    required: false,
};

export const argTypes: Meta<LabelArgs>['argTypes'] = {
    text: { control: 'text' },
    required: { control: 'boolean' },
};
