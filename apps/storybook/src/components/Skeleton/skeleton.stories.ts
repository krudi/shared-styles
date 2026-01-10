import type { Meta } from '@storybook/html-vite';

import { renderSkeleton } from './skeleton.render';
import type { SkeletonArgs } from './skeleton.types';

const meta: Meta<SkeletonArgs> = {
    title: 'Components/Skeleton',
    tags: ['autodocs'],
    render: renderSkeleton,
    parameters: {
        docs: {
            description: {
                component:
                    'Skeleton loaders for placeholder states. Keep layouts stable while data fetches by matching final content structure with configurable widths.',
            },
        },
    },
};

export default meta;
export { Default, Playground } from './skeleton.playground';
