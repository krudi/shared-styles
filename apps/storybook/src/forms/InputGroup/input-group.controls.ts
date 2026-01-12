import type { Meta } from '@storybook/html-vite';

import type { InputGroupArgs } from './input-group.types';

export const defaultArgs: InputGroupArgs = {
    value: '',
    placeholder: 'username',
};

export const argTypes: Meta<InputGroupArgs>['argTypes'] = {
    value: { control: 'text' },
    placeholder: { control: 'text' },
};
