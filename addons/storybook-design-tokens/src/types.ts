export type DesignTokenRow = {
  name: string;
  value: string;
};

export type DesignTokenGroup = {
  id: string;
  presenter?: string;
  rows: DesignTokenRow[];
};

export type DesignTokensData = Record<string, DesignTokenGroup>;

export type DesignTokensAddonOptions = {
  sources?: string[];
};

export type DesignTokensParameter = string | string[];

export type StoryMetaLike = {
  default?: {
    title?: string;
    parameters?: {
      designTokens?: DesignTokensParameter;
    };
  };
};
