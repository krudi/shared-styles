import type { HTMLAttributes } from 'react';
import { cn } from '../utils.js';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: 'default' | 'secondary' | 'destructive' | 'outline';
}

export function Badge({ variant = 'default', className, children, ...props }: BadgeProps) {
    return (
        <span className={cn('badge', `badge-${variant}`, className)} {...props}>
            {children}
        </span>
    );
}
