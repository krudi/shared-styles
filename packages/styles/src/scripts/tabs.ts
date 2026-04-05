const getTabs = (root: HTMLElement): HTMLButtonElement[] =>
    Array.from(root.querySelectorAll<HTMLElement>('[role="tab"]')).filter(
        (tab): tab is HTMLButtonElement => tab instanceof HTMLButtonElement
    );

const getPanels = (root: HTMLElement): HTMLElement[] =>
    Array.from(root.querySelectorAll<HTMLElement>('[role="tabpanel"]'));

const getControlledPanel = (root: HTMLElement, tab: HTMLButtonElement): HTMLElement | null => {
    const panelId = tab.getAttribute('aria-controls');

    if (!panelId) {
        return null;
    }

    const panel = root.querySelector<HTMLElement>(`#${CSS.escape(panelId)}`);
    return panel instanceof HTMLElement ? panel : null;
};

const setSelectedState = (tab: HTMLButtonElement, selected: boolean): void => {
    tab.setAttribute('aria-selected', String(selected));
    tab.setAttribute('tabindex', selected ? '0' : '-1');
    tab.classList.toggle('is-active', selected);
};

const setPanelState = (panel: HTMLElement, selected: boolean): void => {
    panel.classList.toggle('is-active', selected);
    panel.hidden = !selected;
};

export const wireTabs = (root: HTMLElement | null): (() => void) => {
    if (!root) {
        return () => undefined;
    }

    const tabs = getTabs(root);
    const panels = getPanels(root);

    if (tabs.length === 0 || panels.length === 0) {
        return () => undefined;
    }

    const activateTab = (nextTab: HTMLButtonElement, { focus = true }: { focus?: boolean } = {}): void => {
        tabs.forEach((tab) => {
            const isSelected = tab === nextTab;
            setSelectedState(tab, isSelected);

            const panel = getControlledPanel(root, tab);
            if (panel) {
                setPanelState(panel, isSelected);
            }
        });

        if (focus) {
            nextTab.focus();
        }
    };

    const selectedTab = tabs.find((tab) => tab.getAttribute('aria-selected') === 'true') ?? tabs[0];

    if (!selectedTab) {
        return () => undefined;
    }

    activateTab(selectedTab, { focus: false });

    const onClick = (event: Event): void => {
        const target = event.target instanceof HTMLElement ? event.target.closest<HTMLElement>('[role="tab"]') : null;

        if (!(target instanceof HTMLButtonElement) || !root.contains(target)) {
            return;
        }

        activateTab(target, { focus: false });
    };

    const onKeydown = (event: KeyboardEvent): void => {
        const currentTab = event.target instanceof HTMLButtonElement ? event.target : null;

        if (!currentTab || currentTab.getAttribute('role') !== 'tab') {
            return;
        }

        const currentIndex = tabs.indexOf(currentTab);

        if (currentIndex === -1) {
            return;
        }

        let nextIndex: number | null = null;

        switch (event.key) {
            case 'ArrowRight':
            case 'ArrowDown':
                nextIndex = (currentIndex + 1) % tabs.length;
                break;
            case 'ArrowLeft':
            case 'ArrowUp':
                nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
                break;
            case 'Home':
                nextIndex = 0;
                break;
            case 'End':
                nextIndex = tabs.length - 1;
                break;
            default:
                return;
        }

        const nextTab = nextIndex === null ? null : tabs[nextIndex];

        if (!nextTab) {
            return;
        }

        event.preventDefault();
        activateTab(nextTab);
    };

    root.addEventListener('click', onClick);
    root.addEventListener('keydown', onKeydown);

    return () => {
        root.removeEventListener('click', onClick);
        root.removeEventListener('keydown', onKeydown);
    };
};
