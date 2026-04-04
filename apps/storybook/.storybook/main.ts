import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import type { StorybookConfig } from '@storybook/html-vite';
import remarkGfm from 'remark-gfm';

const getAbsolutePath = (packageName: string) =>
    dirname(fileURLToPath(import.meta.resolve(`${packageName}/package.json`)));

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        {
            name: '@krudi/storybook-design-tokens',
            options: {
                sources: [
                    '../../../packages/styles/src/styles/palette.css',
                    '../../../packages/styles/src/styles/theme.css',
                    '../../../packages/styles/src/styles/variables.css',
                ],
            },
        },
        {
            name: getAbsolutePath('@storybook/addon-docs'),
            options: {
                mdxPluginOptions: {
                    mdxCompileOptions: {
                        remarkPlugins: [remarkGfm],
                    },
                },
            },
        },
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
