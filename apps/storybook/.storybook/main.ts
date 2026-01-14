import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import type { StorybookConfig } from '@storybook/html-vite';

const getAbsolutePath = (packageName: string) =>
    dirname(fileURLToPath(import.meta.resolve(`${packageName}/package.json`)));

const config: StorybookConfig = {
    stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        getAbsolutePath('@storybook/addon-docs'),
        getAbsolutePath('@storybook/addon-links'),
        getAbsolutePath('@storybook/addon-themes'),
        getAbsolutePath('@storybook/addon-a11y'),
        getAbsolutePath('@storybook/addon-vitest'),
    ],
    features: {
        experimentalRSC: true,
    },
    core: {
        disableTelemetry: true,
    },
    framework: {
        name: getAbsolutePath('@storybook/html-vite'),
        options: {},
    },
};

export default config;
