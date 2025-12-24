import '@krudi/styles/styles.css';

import type { Preview } from '@storybook/html';

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
        viewport: {
            options: {
                mobile: {
                    name: 'Mobile (360px)',
                    styles: { width: '360px', height: '640px' },
                    type: 'mobile',
                },
                tablet: {
                    name: 'Tablet (768px)',
                    styles: { width: '768px', height: '1024px' },
                    type: 'tablet',
                },
                desktop: {
                    name: 'Desktop (1280px)',
                    styles: { width: '1280px', height: '720px' },
                    type: 'desktop',
                },
            },
        },
        a11y: {
            test: 'todo',
        },
    },
    tags: ['autodocs'],
    initialGlobals: {
        viewport: {
            value: 'responsive',
            isRotated: false,
        },
    },
};

export default preview;
