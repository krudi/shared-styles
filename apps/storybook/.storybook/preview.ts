import '@krudi/styles/ui';

import type { Preview } from '@storybook/html';
import { MINIMAL_VIEWPORTS } from 'storybook/viewport';

const preview: Preview = {
    parameters: {
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
        },
        a11y: {
            test: 'warn',
        },
        viewport: {
            options: MINIMAL_VIEWPORTS,
        },
    },
    tags: ['autodocs'],
};

export default preview;
