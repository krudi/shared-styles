import type { StorybookConfig } from '@storybook/html-vite';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const getAbsolutePath = (packageName: string) =>
    dirname(fileURLToPath(import.meta.resolve(`${packageName}/package.json`)));

const config: StorybookConfig = {
    stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        getAbsolutePath('@storybook/addon-links'),
        getAbsolutePath('@storybook/addon-themes'),
        getAbsolutePath('@storybook/addon-a11y'),
        getAbsolutePath('@storybook/addon-vitest'),
        getAbsolutePath('@storybook/addon-docs'),
    ],
    framework: {
        name: getAbsolutePath('@storybook/html-vite'),
        options: {},
    },
};

export default config;
