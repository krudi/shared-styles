import type { Meta } from '@storybook/html-vite';

import { renderFormField } from './forms.render';
import type { FormFieldArgs } from './forms.types';

const meta: Meta<FormFieldArgs> = {
    title: 'Components/Forms',
    tags: ['autodocs'],
    render: renderFormField,
    parameters: {
        docs: {
            description: {
                component:
                    'Form primitives (inputs, labels, fieldsets, radio/checkbox, groups, progress bar) styled via the forms layer. Spacing, radius, and typography come from shared tokens.',
            },
        },
    },
};

export default meta;
export { Default, Playground } from './forms.playground';
