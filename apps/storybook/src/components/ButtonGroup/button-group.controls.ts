import type { Meta } from '@storybook/html-vite';

import type { ButtonGroupArgs } from './button-group.types';

export const defaultArgs: ButtonGroupArgs = {
    labels: ['Left', 'Middle', 'Right'],
    variant: 'primary',
};

export const argTypes: Meta<ButtonGroupArgs>['argTypes'] = {
    labels: { control: 'object' },
    variant: {
        control: 'inline-radio',
        options: ['primary', 'secondary', 'outline-primary', 'outline-secondary'],
    },
};
