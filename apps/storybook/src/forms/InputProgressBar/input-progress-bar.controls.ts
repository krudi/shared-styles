import type { Meta } from '@storybook/html-vite';

import type { InputProgressBarArgs } from './input-progress-bar.types';

export const defaultArgs: InputProgressBarArgs = {
    value: 60,
    max: 100,
};

export const argTypes: Meta<InputProgressBarArgs>['argTypes'] = {
    value: { control: { type: 'range', min: 0, max: 100, step: 5 } },
    max: { control: { type: 'number', min: 1 } },
};
