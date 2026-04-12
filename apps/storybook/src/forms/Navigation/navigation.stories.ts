import type { Meta, StoryObj } from '@storybook/html-vite';

import type { NavigationArgs } from './navigation.types';

const meta = {
    title: 'Forms/Navigation',
    render: (): string => `
        <div class="form-navigation">
            <button class="btn btn-outline" type="button">Back</button>
            <button class="btn btn-default" type="button">Continue</button>
        </div>
    `,
    parameters: {
        docs: {
            description: {
                component: `Navigation — purpose-driven component from the design system. Use this component for its primary role in the UI, follow the system tokens for spacing and colour, and ensure a clear accessible name is provided. Follow keyboard and screen-reader best practices when the component is interactive.

Design tokens: see the Tokens story under the theme section (theme/Tokens) for reference to CSS variables and token names.`,
            },
        },
    },
} satisfies Meta<NavigationArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Use <code>.form-navigation</code> to add consistent spacing before form action controls such as previous/next buttons.',
            },
        },
    },
};

export const InFieldsetFlow: Story = {
    render: (): string => `
        <fieldset class="form-fieldset">
            <legend class="form-legend">Newsletter preferences</legend>
            <div class="form-block">
                <label class="form-label" for="navigation-email">Email</label>
                <input class="form-control" id="navigation-email" type="email" placeholder="name@example.com" />
            </div>
            <div class="form-block">
                <label class="form-label" for="navigation-frequency">Frequency</label>
                <select class="form-select" id="navigation-frequency">
                    <option>Weekly</option>
                    <option>Monthly</option>
                    <option>Quarterly</option>
                </select>
            </div>
            <div class="form-navigation">
                <button class="btn btn-outline" type="button">Cancel</button>
                <button class="btn btn-default" type="button">Save preferences</button>
            </div>
        </fieldset>
    `,
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'This example shows the intended spacing when <code>.form-navigation</code> follows grouped form fields inside a fieldset.',
            },
        },
    },
};
