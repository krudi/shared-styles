import type { Meta } from '@storybook/html-vite';

import type { ButtonArgs } from './button.types';

export const defaultArgs: ButtonArgs = {
    label: 'Action',
    variant: 'primary',
    size: 'default',
    disabled: false,
};

export const argTypes: Meta<ButtonArgs>['argTypes'] = {
    label: { control: 'text', description: 'Text inside the button' },
    variant: {
        control: 'inline-radio',
        options: [
            'primary',
            'secondary',
            'success',
            'info',
            'warning',
            'danger',
            'white',
            'outline-primary',
            'outline-secondary',
            'outline-success',
            'outline-info',
            'outline-warning',
            'outline-danger',
            'outline-white',
            'link',
        ],
        description: 'Visual style of the button',
    },
    size: {
        control: 'inline-radio',
        options: ['default', 'sm'],
        description: 'Size of the button',
    },
    disabled: { control: 'boolean', description: 'Disable the button' },
};
