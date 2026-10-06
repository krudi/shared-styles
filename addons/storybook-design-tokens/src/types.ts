export type DesignTokenRow = {
    name: string;
    value: string;
};

export type DesignTokenGroup = {
    id: string;
    presenter?: string | undefined;
    rows: DesignTokenRow[];
};

export type DesignTokensData = Record<string, DesignTokenGroup>;

export type DesignTokensAddonOptions = {
    sources?: string[];
};

type DesignTokensParameter = string | string[];

export type StoryMetaLike = {
    default?: {
        title?: string;
        parameters?: {
            designTokens?: DesignTokensParameter;
        };
    };
};
