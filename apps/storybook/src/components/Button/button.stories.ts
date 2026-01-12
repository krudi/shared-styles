import type { Meta } from '@storybook/html-vite';

import { argTypes } from './button.controls';
import { renderButton } from './button.render';
import type { ButtonArgs } from './button.types';

const meta: Meta<ButtonArgs> = {
    title: 'Components/Button',
    tags: ['autodocs'],
    render: renderButton,
    argTypes,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component:
                    'Buttons with tokenised variants, sizes, and disabled states for consistent interactions.',
            },
        },
    },
};

export default meta;
export { Default, Playground } from './button.playground';
