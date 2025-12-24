import '../../../packages/styles/src/styles.css';
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
    },
    tags: ['autodocs'],
};

export default preview;
