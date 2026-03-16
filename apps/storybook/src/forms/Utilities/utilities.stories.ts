import type { Meta, StoryObj } from '@storybook/html-vite';

import type { UtilitiesArgs } from './utilities.types';

const meta = {
    title: 'Forms/Utilities',
    tags: ['autodocs'],
    render: (): string => `
        <div class="form-block">
            <label class="form-label" for="utilities-name">Name</label>
            <input class="form-control" id="utilities-name" type="text" placeholder="Jane Doe" />
            <span class="form-text-hint">Helper text now inherits spacing directly from the text utility tokens.</span>
        </div>
        <div class="form-block">
            <label class="form-label" for="utilities-email">Email</label>
            <input class="form-control" id="utilities-email" type="email" placeholder="name@example.com" />
        </div>
        <div class="form-block">
            <label class="form-label" for="utilities-role">
                Role
                <span class="form-label-required" aria-hidden="true">*</span>
            </label>
            <select class="form-select" id="utilities-role" required>
                <option value="">Choose a role</option>
                <option>Designer</option>
                <option>Developer</option>
                <option>Content</option>
            </select>
            <span class="form-text">Block-level validation styles also apply to selects.</span>
        </div>
    `,
    parameters: {
        docs: {
            description: {
                component:
                    'Form utility helpers for stacked fields, required indicators, and validation-aware helper text.',
            },
        },
    },
} satisfies Meta<UtilitiesArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                story: 'Form utility spacing is applied via <code>.form-block</code>, while labels and helper text pick up the new required and spacing helpers.',
            },
        },
    },
};

export const Playground: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Use <code>.form-block</code> to keep consistent vertical spacing and validation styling across inputs and selects.',
            },
        },
    },
};
