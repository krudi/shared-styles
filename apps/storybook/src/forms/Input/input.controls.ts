import type { Meta } from '@storybook/html-vite';

import type { InputArgs } from './input.types';

export const defaultArgs: InputArgs = {
    placeholder: 'name@example.com',
    value: '',
    disabled: false,
};

export const argTypes: Meta<InputArgs>['argTypes'] = {
    placeholder: { control: 'text' },
    value: { control: 'text' },
    disabled: { control: 'boolean' },
};
