import type { Meta, StoryObj } from '@storybook/html-vite';

import type { ModalArgs } from './modal.types';

const meta = {
    title: 'Components/Modal',
    tags: ['autodocs'],
    render: ({ title, body, primaryLabel, secondaryLabel }: ModalArgs): string => `
        <dialog class="modal" open>
            <header class="modal-header">
                <h2 class="h4 m-0">${title}</h2>
                <button type="button" class="btn btn-close modal-close" aria-label="Close">×</button>
            </header>
            <section class="modal-body">
                <p class="mb-0">${body}</p>
            </section>
            <footer class="modal-footer">
                <div class="btn-group">
                    <button type="button" class="btn btn-secondary">${secondaryLabel}</button>
                    <button type="button" class="btn btn-primary">${primaryLabel}</button>
                </div>
            </footer>
        </dialog>
        <p class="text-gray">Dialog is rendered open for preview. Apply <code>open</code> attribute or JS to show/hide in your app.</p>
    `,
    args: {
        title: 'Modal title',
        body: 'Use .modal on a <dialog> element. Tokens control max-width, padding, border, and backdrop.',
        primaryLabel: 'Confirm',
        secondaryLabel: 'Cancel',
    },
    argTypes: {
        title: { control: 'text' },
        body: { control: 'text' },
        primaryLabel: { control: 'text' },
        secondaryLabel: { control: 'text' },
    },
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component:
                    'Modal styling for native <code>&lt;dialog&gt;</code>. Backdrop, transitions, and padding come from CSS tokens.',
            },
        },
    },
} satisfies Meta<ModalArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Canonical modal example with title, body, and footer actions.',
            },
        },
    },
};

export const Playground: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Tweak the title, body copy, and button labels to preview modal layout variations.',
            },
        },
    },
};
