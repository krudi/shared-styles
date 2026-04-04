import '@krudi/styles';
import './preview.css';

import { withThemeByClassName } from '@storybook/addon-themes';
import type { Preview } from '@storybook/html';
import { MINIMAL_VIEWPORTS } from 'storybook/viewport';

const preview: Preview = {
    decorators: [
        withThemeByClassName({
            themes: {
                light: '',
                dark: 'dark',
            },
            defaultTheme: 'light',
        }),
    ],
    parameters: {
        backgrounds: {
            disabled: true,
        },
        controls: {
            expanded: true,
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        layout: 'fullscreen',
        docs: {
            codePanel: true,
            canvas: {
                className: `!bg-background`,
            },
        },
        options: {
            storySort: {
                order: ['Brand', 'Base', 'Components', 'Forms', 'Html', 'Layout', 'Theme', 'Utilities'],
            },
        },
        a11y: {
            test: 'error',
        },
        viewport: {
            options: MINIMAL_VIEWPORTS,
        },
    },
};

export default preview;
