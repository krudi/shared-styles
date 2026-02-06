type ModalIds = {
    openId: string;
    dialogId: string;
    closeSelector?: string;
};

export const wireModalTrigger = ({ openId, dialogId, closeSelector }: ModalIds): (() => void) => {
    const openTrigger = document.getElementById(openId);
    const dialog = document.getElementById(dialogId);

    if (!(openTrigger instanceof HTMLElement) || !(dialog instanceof HTMLDialogElement)) {
        return () => undefined;
    }

    const selector = closeSelector ?? '[data-modal-close]';

    const onClick = (): void => {
        dialog.showModal();
    };

    const onCloseClick = (event: Event): void => {
        const target = event.target instanceof HTMLElement ? event.target : null;
        if (!target) {
            return;
        }

        if (!target.closest(selector)) {
            return;
        }

        dialog.close();
    };

    openTrigger.addEventListener('click', onClick);
    dialog.addEventListener('click', onCloseClick);

    return () => {
        openTrigger.removeEventListener('click', onClick);
        dialog.removeEventListener('click', onCloseClick);
    };
};
