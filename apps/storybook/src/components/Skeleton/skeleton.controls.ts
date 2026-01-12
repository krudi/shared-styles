import type { Meta } from '@storybook/html-vite';

import type { SkeletonArgs } from './skeleton.types';

export const defaultArgs: SkeletonArgs = {
    lines: 3,
};

export const argTypes: Meta<SkeletonArgs>['argTypes'] = {
    lines: { control: { type: 'number', min: 1, max: 6, step: 1 } },
};
