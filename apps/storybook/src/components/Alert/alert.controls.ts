import type { Meta } from '@storybook/html-vite';

import type { AlertArgs } from './alert.types';

export const defaultArgs: AlertArgs = {
    title: 'Primary alert',
    description: 'Use to highlight important information.',
    variant: 'primary',
    dismissible: true,
};

export const argTypes: Meta<AlertArgs>['argTypes'] = {
    title: { control: 'text' },
    description: { control: 'text' },
    variant: {
        control: 'select',
        options: ['primary', 'success', 'info', 'warning', 'danger', 'white'],
    },
    dismissible: { control: 'boolean' },
};
