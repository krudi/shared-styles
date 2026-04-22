import type { ComputedRef } from 'vue';

export const TABS_KEY = 'krudi-tabs';

export interface TabsContext {
    activeTab: ComputedRef<string>;
    setActiveTab: (id: string) => void;
}
