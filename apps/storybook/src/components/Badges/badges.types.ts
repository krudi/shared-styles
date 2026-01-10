export type BadgeVariant = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger';

export type BadgeArgs = {
    label: string;
    variant: BadgeVariant;
};
