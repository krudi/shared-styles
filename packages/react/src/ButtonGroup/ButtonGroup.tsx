import type { HTMLAttributes } from 'react';
import { cn } from '../utils.js';

export function ButtonGroup({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn('btn-group', className)} {...props}>
            {children}
        </div>
    );
}
