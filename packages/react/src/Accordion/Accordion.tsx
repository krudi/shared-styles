import type { HTMLAttributes } from 'react';
import { cn } from '../utils.js';

export function Accordion({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn('accordion', className)} {...props}>
            {children}
        </div>
    );
}

export interface AccordionItemProps extends HTMLAttributes<HTMLDetailsElement> {
    open?: boolean;
}

export function AccordionItem({ open, className, children, ...props }: AccordionItemProps) {
    return (
        <details className={cn('accordion-details', className)} open={open} {...props}>
            {children}
        </details>
    );
}

export function AccordionTrigger({ className, children, ...props }: HTMLAttributes<HTMLElement>) {
    return (
        <summary className={cn('accordion-summary', className)} {...props}>
            <span className="accordion-summary-title">{children}</span>
            <span className="accordion-summary-icon" aria-hidden="true" />
        </summary>
    );
}

export function AccordionContent({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn('accordion-content', className)} {...props}>
            {children}
        </div>
    );
}
