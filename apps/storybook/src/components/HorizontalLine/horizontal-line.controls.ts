import type { Meta } from '@storybook/html-vite';

import type { HorizontalLineArgs } from './horizontal-line.types';

export const defaultArgs: HorizontalLineArgs = {
    beforeText: 'Sections can be separated with the design-token-driven horizontal rule.',
    afterText: 'Use supporting copy to explain what comes next.',
};

export const argTypes: Meta<HorizontalLineArgs>['argTypes'] = {
    beforeText: { control: 'text' },
    afterText: { control: 'text' },
};
