import { useEffect, useRef, type DialogHTMLAttributes, type HTMLAttributes } from 'react';
import { cn } from '../utils.js';

export interface ModalProps extends DialogHTMLAttributes<HTMLDialogElement> {
    open: boolean;
    onClose: () => void;
}

export function Modal({ open, onClose, className, children, ...props }: ModalProps) {
    const ref = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = ref.current;
        if (!dialog) return;
        if (open && !dialog.open) {
            dialog.showModal();
        } else if (!open && dialog.open) {
            dialog.close();
        }
    }, [open]);

    useEffect(() => {
        const dialog = ref.current;
        if (!dialog) return;
        const handle = () => onClose();
        dialog.addEventListener('close', handle);
        return () => dialog.removeEventListener('close', handle);
    }, [onClose]);

    return (
        <dialog ref={ref} className={cn('modal', className)} {...props}>
            {children}
        </dialog>
    );
}

export function ModalHeader({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn('modal-header', className)} {...props}>
            {children}
        </div>
    );
}

export function ModalBody({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn('modal-body', className)} {...props}>
            {children}
        </div>
    );
}

export function ModalFooter({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn('modal-footer', className)} {...props}>
            {children}
        </div>
    );
}

export interface ModalCloseProps extends HTMLAttributes<HTMLButtonElement> {
    onClick: () => void;
}

export function ModalClose({ onClick, className, children, ...props }: ModalCloseProps) {
    return (
        <button
            type="button"
            className={cn('btn btn-close modal-close', className)}
            onClick={onClick}
            aria-label="Close"
            {...props}
        >
            {children}
        </button>
    );
}
