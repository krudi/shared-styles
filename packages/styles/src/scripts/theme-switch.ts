type ThemeSwitchIds = {
    switchId: string;
    targetSelector?: string;
    darkClassName?: string;
    lightClassName?: string;
};

const noop = (): void => undefined;

const resolveThemeTarget = (targetSelector?: string): HTMLElement | null => {
    if (targetSelector) {
        const target = document.querySelector(targetSelector);
        return target instanceof HTMLElement ? target : null;
    }

    return document.documentElement;
};

export const wireThemeSwitch = ({
    switchId,
    targetSelector,
    darkClassName = 'dark',
    lightClassName = 'light',
}: ThemeSwitchIds): (() => void) => {
    const switchElement = document.getElementById(switchId);
    const themeTarget = resolveThemeTarget(targetSelector);

    if (!(switchElement instanceof HTMLButtonElement) || !themeTarget) {
        return noop;
    }

    const sync = (isDark: boolean): void => {
        switchElement.setAttribute('aria-pressed', String(isDark));
        switchElement.setAttribute('data-theme-switch-state', isDark ? 'dark' : 'light');
    };

    const isDarkTheme = (): boolean => themeTarget.classList.contains(darkClassName);

    const onClick = (): void => {
        const nextIsDark = !isDarkTheme();

        themeTarget.classList.toggle(darkClassName, nextIsDark);

        if (lightClassName) {
            themeTarget.classList.toggle(lightClassName, !nextIsDark);
        }

        sync(nextIsDark);
    };

    switchElement.addEventListener('click', onClick);
    sync(isDarkTheme());

    return () => {
        switchElement.removeEventListener('click', onClick);
    };
};
