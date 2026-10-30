export type BreadcrumbArgs = {
    ariaLabel: string;
    items: Array<{ href: string; label: string }>;
    current: string;
};
