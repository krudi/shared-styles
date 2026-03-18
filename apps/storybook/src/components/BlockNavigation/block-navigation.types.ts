export type BlockNavigationItem = {
    href: string;
    label: string;
};

export type BlockNavigationArgs = {
    ariaLabel: string;
    items: BlockNavigationItem[];
};
