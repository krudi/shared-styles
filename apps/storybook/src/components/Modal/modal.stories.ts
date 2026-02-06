import { wireModalTrigger } from '@krudi/styles/components';
import type { Meta, StoryObj } from '@storybook/html-vite';

import type { ModalArgs } from './modal.types';

const meta = {
    title: 'Components/Modal',
    tags: ['autodocs'],
    play: ({ canvasElement }): void => {
        const openTrigger = canvasElement.querySelector<HTMLElement>('button[id$="-modal-open"]');
        const dialog = canvasElement.querySelector<HTMLDialogElement>('dialog[id$="-modal"]');
        if (!openTrigger || !dialog) {
            return;
        }

        wireModalTrigger({ openId: openTrigger.id, dialogId: dialog.id });
    },
    render: ({ title, body, primaryLabel, secondaryLabel }: ModalArgs, { id }): string => `
        <button
            type="button"
            class="btn btn-default"
            id="${id}-modal-open"
        >
            Open modal
        </button>
        <dialog class="modal" id="${id}-modal">
            <header class="modal-header">
                <h2 class="h4 m-0">${title}</h2>
                <button
                    type="button"
                    class="btn btn-close modal-close"
                    aria-label="Close"
                    data-modal-close
                >
                    ×
                </button>
            </header>
            <section class="modal-body">
                <p class="mb-0">${body}</p>
            </section>
            <footer class="modal-footer">
                <div class="btn-group">
                    <button
                        type="button"
                        class="btn btn-secondary"
                        data-modal-close
                    >
                        ${secondaryLabel}
                    </button>
                    <button
                        type="button"
                        class="btn btn-default"
                        data-modal-close
                    >
                        ${primaryLabel}
                    </button>
                </div>
            </footer>
        </dialog>
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
