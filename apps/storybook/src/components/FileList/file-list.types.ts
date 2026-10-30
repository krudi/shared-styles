export type FileListArgs = {
    ariaLabel: string;
    showIcons: boolean;
    showMeta: boolean;
    files: Array<{ href: string; name: string; type: string; size: string; description: string }>;
};
