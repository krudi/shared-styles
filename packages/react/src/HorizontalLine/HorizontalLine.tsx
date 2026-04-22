import type { HTMLAttributes } from 'react';
import { cn } from '../utils.js';

export function HorizontalLine({ className, ...props }: HTMLAttributes<HTMLHRElement>) {
    return <hr className={cn('hr', className)} {...props} />;
}
