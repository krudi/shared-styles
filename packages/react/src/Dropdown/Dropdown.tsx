import { useEffect, useRef, useState, type AnchorHTMLAttributes, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../utils.js';

export interface DropdownProps extends HTMLAttributes<HTMLDivElement> {
    trigger: ReactNode;
}

export function Dropdown({ trigger, className, children, ...props }: DropdownProps) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function onClickOutside(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener('mousedown', onClickOutside);
        return () => document.removeEventListener('mousedown', onClickOutside);
    }, []);

    return (
        <div ref={ref} className={cn('dropdown', open && 'is-open', className)} {...props}>
            <button
                type="button"
                className="dropdown-trigger"
                aria-expanded={open}
                aria-haspopup="listbox"
                onClick={() => setOpen((v) => !v)}
            >
                {trigger}
                <span className="dropdown-summary-icon" aria-hidden="true" />
            </button>
            <ul
                className="dropdown-list"
                role="listbox"
                style={open ? { display: 'flex', flexDirection: 'column', opacity: '1' } : undefined}
            >
                {children}
            </ul>
        </div>
    );
}

export interface DropdownItemProps extends HTMLAttributes<HTMLLIElement> {
    href?: string;
    current?: boolean;
    onSelect?: () => void;
}

export function DropdownItem({ href, current, onSelect, className, children, ...props }: DropdownItemProps) {
    const linkProps: AnchorHTMLAttributes<HTMLAnchorElement> = {
        href,
        className: 'dropdown-list-item-link',
        'aria-current': current ? 'page' : undefined,
        onClick: onSelect,
    };

    return (
        <li className={cn('dropdown-list-item', className)} {...props}>
            {href ? (
                <a {...linkProps}>{children}</a>
            ) : (
                <button type="button" className="dropdown-list-item-link" onClick={onSelect}>
                    {children}
                </button>
            )}
        </li>
    );
}
