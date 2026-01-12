import type { Meta } from '@storybook/html-vite';

import type { DropdownArgs } from './dropdown.types';

export const defaultArgs: DropdownArgs = {
    label: 'Options',
    items: ['Profile', 'Settings', 'Log out'],
};

export const argTypes: Meta<DropdownArgs>['argTypes'] = {
    label: { control: 'text' },
    items: { control: 'object' },
};
