import * as a11yAddonAnnotations from '@storybook/addon-a11y/preview';
import { setProjectAnnotations } from '@storybook/html-vite';
import * as projectAnnotations from './.storybook/preview';

setProjectAnnotations([a11yAddonAnnotations, projectAnnotations]);
