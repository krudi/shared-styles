import { createContext, useContext, useState, type ButtonHTMLAttributes, type HTMLAttributes } from 'react';
import { cn } from '../utils.js';

interface TabsContextValue {
    activeTab: string;
    setActiveTab: (id: string) => void;
}

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabsContext(): TabsContextValue {
    const ctx = useContext(TabsContext);
    if (!ctx) throw new Error('Tabs sub-components must be used inside <Tabs>');
    return ctx;
}

export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
    defaultTab?: string;
    activeTab?: string;
    onTabChange?: (id: string) => void;
}

export function Tabs({ defaultTab = '', activeTab: controlled, onTabChange, className, children, ...props }: TabsProps) {
    const [internal, setInternal] = useState(defaultTab);
    const activeTab = controlled ?? internal;

    function setActiveTab(id: string) {
        setInternal(id);
        onTabChange?.(id);
    }

    return (
        <TabsContext.Provider value={{ activeTab, setActiveTab }}>
            <div className={cn('tabs', className)} {...props}>
                {children}
            </div>
        </TabsContext.Provider>
    );
}

export function TabsList({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div role="tablist" className={cn('tabs-list', className)} {...props}>
            {children}
        </div>
    );
}

export interface TabsTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    tabId: string;
}

export function TabsTrigger({ tabId, className, children, ...props }: TabsTriggerProps) {
    const { activeTab, setActiveTab } = useTabsContext();
    const isActive = activeTab === tabId;

    return (
        <button
            type="button"
            role="tab"
            aria-selected={isActive}
            className={cn('tabs-trigger', isActive && 'is-active', className)}
            onClick={() => setActiveTab(tabId)}
            {...props}
        >
            {children}
        </button>
    );
}

export function TabsPanels({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn('tabs-panels', className)} {...props}>
            {children}
        </div>
    );
}

export interface TabsPanelProps extends HTMLAttributes<HTMLDivElement> {
    tabId: string;
}

export function TabsPanel({ tabId, className, children, ...props }: TabsPanelProps) {
    const { activeTab } = useTabsContext();
    const isActive = activeTab === tabId;

    return (
        <div
            role="tabpanel"
            className={cn('tabs-panel', isActive && 'is-active', className)}
            {...props}
        >
            {children}
        </div>
    );
}
