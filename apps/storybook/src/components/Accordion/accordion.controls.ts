import type { Meta } from '@storybook/html-vite';

import type { AccordionArgs } from './accordion.types';

export const defaultArgs: AccordionArgs = {
    title: 'What is included?',
    content: 'Token-based spacing, borders, and typography. Extend with your own content inside the content block.',
    open: true,
};

export const argTypes: Meta<AccordionArgs>['argTypes'] = {
    title: { control: 'text' },
    content: { control: 'text' },
    open: { control: 'boolean' },
};
