import type { Meta } from '@storybook/html-vite';

import { renderModal } from './modal.render';
import type { ModalArgs } from './modal.types';

const meta: Meta<ModalArgs> = {
    title: 'Components/Modal',
    tags: ['autodocs'],
    render: renderModal,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component:
                    'Modal styling for native <code>&lt;dialog&gt;</code>. Backdrop, transitions, and padding come from CSS tokens.',
            },
        },
    },
};

export default meta;
export { Default, Playground } from './modal.playground';
