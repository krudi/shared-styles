import type { HTMLAttributes } from 'react';
import { cn } from '../utils.js';

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'destructive';
}

export function Alert({ variant = 'default', className, children, ...props }: AlertProps) {
    return (
        <div
            role="alert"
            className={cn('alert', variant === 'destructive' && 'alert-destructive', className)}
            {...props}
        >
            {children}
        </div>
    );
}

export function AlertTitle({ className, children, ...props }: HTMLAttributes<HTMLParagraphElement>) {
    return (
        <p className={cn('alert-title', className)} {...props}>
            {children}
        </p>
    );
}

export function AlertDescription({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn('alert-description', className)} {...props}>
            {children}
        </div>
    );
}
