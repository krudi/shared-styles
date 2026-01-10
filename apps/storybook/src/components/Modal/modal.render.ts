import type { ModalArgs } from './modal.types';

export const renderModal = (): string => `
    <dialog class="modal" open>
        <header class="modal-header">
            <h2 class="h4 m-0">Modal title</h2>
            <button type="button" class="btn btn-close modal-close" aria-label="Close">×</button>
        </header>
        <section class="modal-body">
            <p class="mb-0">Use <code>.modal</code> on a <code>&lt;dialog&gt;</code> element. Tokens control max-width, padding, border, and backdrop.</p>
        </section>
        <footer class="modal-footer">
            <div class="btn-group">
                <button type="button" class="btn btn-secondary">Cancel</button>
                <button type="button" class="btn btn-primary">Confirm</button>
            </div>
        </footer>
    </dialog>
    <p class="text-gray">Dialog is rendered open for preview. Apply <code>open</code> attribute or JS to show/hide in your app.</p>
`;

export const renderModalPlayground = ({ title, body, primaryLabel, secondaryLabel }: ModalArgs): string => `
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
`;
