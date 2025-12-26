import * as a11yAddonAnnotations from '@storybook/addon-a11y/preview';
import { setProjectAnnotations } from '@storybook/html-vite';
import * as projectAnnotations from './.storybook/preview';
import { beforeAll } from 'vitest';

const project = setProjectAnnotations([a11yAddonAnnotations, projectAnnotations]);

beforeAll(project.beforeAll);
