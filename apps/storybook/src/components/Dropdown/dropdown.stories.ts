import type { Meta } from '@storybook/html-vite';

import { renderDropdown } from './dropdown.render';
import type { DropdownArgs } from './dropdown.types';

const meta: Meta<DropdownArgs> = {
    title: 'Components/Dropdown',
    tags: ['autodocs'],
    render: renderDropdown,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component:
                    'Dropdown built on native <code>popover</code> with anchor positioning. Content panel uses tokenised width, spacing, borders, and z-index. Rotate icon on open.',
            },
        },
    },
};

export default meta;
export { Default, Playground } from './dropdown.playground';
