import type { Meta, StoryObj } from '@storybook/html';

const SkeletonTemplate = () => `
    <main class="main" style="padding: var(--spacer-3); display: grid; gap: var(--spacer-2); grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));">
        <section style="border: 1px solid var(--c-white-200); border-radius: var(--border-radius-md); padding: var(--spacer-2); box-shadow: var(--box-shadow-default);">
            <h2 class="h4 mt-0">Lines</h2>
            <div style="display: grid; gap: var(--spacer-n2);">
                <span class="skeleton-line" style="width: 70%;"></span>
                <span class="skeleton-line" style="width: 90%;"></span>
                <span class="skeleton-line" style="width: 50%;"></span>
            </div>
            <p class="mt-2 text-gray mb-0">Apply <code>.skeleton-line</code> to any block to communicate loading state. Width is controlled inline or via utility classes.</p>
        </section>
        <section style="border: 1px solid var(--c-white-200); border-radius: var(--border-radius-md); padding: var(--spacer-2); box-shadow: var(--box-shadow-default);">
            <h2 class="h4 mt-0">Card placeholder</h2>
            <div style="display: grid; gap: var(--spacer-1);">
                <span class="skeleton-line" style="width: 100%; height: 140px; border-radius: var(--border-radius-md);"></span>
                <span class="skeleton-line" style="width: 60%;"></span>
                <span class="skeleton-line" style="width: 40%;"></span>
            </div>
            <p class="mt-2 text-gray mb-0">Stack skeleton lines to mirror the shape of the final content and reduce layout shift.</p>
        </section>
    </main>
`;

const meta: Meta = {
    title: 'Components/Skeleton',
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Skeleton loaders for placeholder states. Keep layouts stable while data fetches by matching final content structure with configurable widths.',
            },
        },
    },
};
export default meta;

type Story = StoryObj;

export const Lines: Story = {
    render: SkeletonTemplate,
    name: 'Skeleton lines',
    parameters: {
        docs: {
            description: {
                story: 'Use <code>.skeleton-line</code> on block-level elements. Adjust width and height inline to suit the shape you are representing.',
            },
        },
    },
};
