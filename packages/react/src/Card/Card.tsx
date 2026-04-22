import type { HTMLAttributes, ImgHTMLAttributes } from 'react';
import { cn } from '../utils.js';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'white' | 'primary' | 'secondary';
}

export function Card({ variant, className, children, ...props }: CardProps) {
    return (
        <div className={cn('card', variant && `card-${variant}`, className)} {...props}>
            {children}
        </div>
    );
}

export function CardMedia({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn('card-media', className)} {...props}>
            {children}
        </div>
    );
}

export function CardContent({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn('card-content', className)} {...props}>
            {children}
        </div>
    );
}

export function CardHeader({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn('card-content-header', className)} {...props}>
            {children}
        </div>
    );
}

export function CardBody({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn('card-content-body', className)} {...props}>
            {children}
        </div>
    );
}

export function CardFooter({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn('card-content-footer', className)} {...props}>
            {children}
        </div>
    );
}

export function CardActions({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn('card-footer-actions', className)} {...props}>
            {children}
        </div>
    );
}

export function CardTitle({ className, children, ...props }: HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h3 className={cn('card-header-title', className)} {...props}>
            {children}
        </h3>
    );
}

export function CardSubtitle({ className, children, ...props }: HTMLAttributes<HTMLParagraphElement>) {
    return (
        <p className={cn('card-header-subtitle', className)} {...props}>
            {children}
        </p>
    );
}

export interface CardImageProps extends ImgHTMLAttributes<HTMLImageElement> {}

export function CardImage({ className, ...props }: CardImageProps) {
    return <img className={className} {...props} />;
}
