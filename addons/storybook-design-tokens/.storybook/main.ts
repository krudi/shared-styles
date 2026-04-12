import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineMain } from '@storybook/react-vite/node';

const config = defineMain({
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-docs'),
    {
      name: import.meta.resolve('./local-preset.ts'),
      options: {
        sources: [],
      },
    },
  ],
  framework: getAbsolutePath('@storybook/react-vite'),
});

export default config;

function getAbsolutePath(value: string): any {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
}
