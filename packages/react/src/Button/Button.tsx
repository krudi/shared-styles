import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { cn } from '../utils.js';

export type ButtonVariant =
    | 'default'
    | 'secondary'
    | 'destructive'
    | 'outline'
    | 'ghost'
    | 'icon'
    | 'link'
    | 'close';

export type ButtonSize = 'default' | 'sm';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
}

export function Button({ variant = 'default', size, className, children, ...props }: ButtonProps) {
    return (
        <button
            className={cn('btn', `btn-${variant}`, size === 'sm' && 'btn-sm', className)}
            {...props}
        >
            {children}
        </button>
    );
}

export interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
}

export function ButtonLink({ variant = 'link', size, className, children, ...props }: ButtonLinkProps) {
    return (
        <a className={cn('btn', `btn-${variant}`, size === 'sm' && 'btn-sm', className)} {...props}>
            {children}
        </a>
    );
}
