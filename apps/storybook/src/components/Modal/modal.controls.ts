import type { Meta } from '@storybook/html-vite';

import type { ModalArgs } from './modal.types';

export const defaultArgs: ModalArgs = {
    title: 'Modal title',
    body: 'Use .modal on a <dialog> element. Tokens control max-width, padding, border, and backdrop.',
    primaryLabel: 'Confirm',
    secondaryLabel: 'Cancel',
};

export const argTypes: Meta<ModalArgs>['argTypes'] = {
    title: { control: 'text' },
    body: { control: 'text' },
    primaryLabel: { control: 'text' },
    secondaryLabel: { control: 'text' },
};
