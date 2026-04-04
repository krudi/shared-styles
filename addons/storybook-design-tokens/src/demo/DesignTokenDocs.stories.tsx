import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
    title: 'Demo/Design Token Docs',
    parameters: {
        docs: {
            description: {
                component:
                    'Standalone playground for the design token docs block. This validates the addon in isolation before publishing.',
            },
        },
    },
} satisfies Meta;

export default meta;

export const ButtonTokens: StoryObj = {
    parameters: {
        designTokens: 'Components/Button',
    },
};

export const ColourTokens: StoryObj = {
    parameters: {
        designTokens: 'Brand/Design Tokens/Colour',
    },
};
