import type { Meta } from '@storybook/html-vite';

import { renderButtonGroup } from './button-group.render';
import type { ButtonGroupArgs } from './button-group.types';

const meta: Meta<ButtonGroupArgs> = {
    title: 'Components/Button Group',
    tags: ['autodocs'],
    render: renderButtonGroup,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component:
                    'Inline button grouping with consistent gap via <code>.btn-group</code>. Combine with any button variants.',
            },
        },
    },
};

export default meta;
export { Default, Playground } from './button-group.playground';
