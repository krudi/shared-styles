export type TabsItem = {
    description: string;
    id: string;
    label: string;
    title: string;
};

export type TabsArgs = {
    activeTab: string;
    ariaLabel: string;
    items: TabsItem[];
};
