import type { Meta } from '@storybook/html-vite';

import { renderContainer } from './container.render';
import type { ContainerArgs } from './container.types';

const meta: Meta<ContainerArgs> = {
    title: 'Layout/Container',
    tags: ['autodocs'],
    render: renderContainer,
    parameters: {
        docs: {
            description: {
                component: 'Container constraints for responsive page composition.',
            },
        },
    },
};

export default meta;
export { Container } from './container.playground';
