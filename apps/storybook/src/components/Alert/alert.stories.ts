import type { Meta } from '@storybook/html-vite';

import { renderAlert } from './alert.render';
import type { AlertArgs } from './alert.types';

const meta: Meta<AlertArgs> = {
    title: 'Components/Alert',
    tags: ['autodocs'],
    render: renderAlert,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component:
                    'Alert blocks using palette-aligned variants. Combine <code>.alert</code> with variant classes and optional close button.',
            },
        },
    },
};

export default meta;
export { Default, Playground } from './alert.playground';
