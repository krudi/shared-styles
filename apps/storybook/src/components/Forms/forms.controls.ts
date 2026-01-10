import type { Meta } from '@storybook/html-vite';

import type { FormFieldArgs } from './forms.types';

export const defaultArgs: FormFieldArgs = {
    label: 'Email',
    placeholder: 'name@example.com',
    helpText: 'We’ll send a verification link.',
    required: false,
    state: 'default',
};

export const argTypes: Meta<FormFieldArgs>['argTypes'] = {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    helpText: { control: 'text' },
    required: { control: 'boolean' },
    state: { control: 'inline-radio', options: ['default', 'error'] },
};
