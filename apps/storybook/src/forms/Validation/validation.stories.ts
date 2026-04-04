import type { Meta, StoryObj } from '@storybook/html-vite';

const meta = {
    title: 'Forms/Validation',
    render: (): string => `
        <div class="form-block">
            <label class="form-label" for="validation-email">Email</label>
            <input
                class="form-control"
                id="validation-email"
                type="email"
                placeholder="name@example.com"
                required
            />
            <span class="form-text">Invalid until a valid email is entered.</span>
        </div>
        <div class="form-block">
            <label class="form-label" for="validation-name">Name</label>
            <input
                class="form-control"
                id="validation-name"
                type="text"
                value="Jane Doe"
                required
            />
            <span class="form-text">Valid once the input is touched.</span>
        </div>
        <div class="form-block">
            <div class="form-checkbox">
                <input class="form-checkbox-input" id="validation-terms" type="checkbox" required />
                <label class="form-checkbox-label" for="validation-terms">Accept terms (required)</label>
            </div>
            <span class="form-text">Required checkbox state.</span>
        </div>
        <div class="form-block">
            <div class="form-radio">
                <input class="form-radio-input" id="validation-yes" name="validation-choice" type="radio" required />
                <label class="form-radio-label" for="validation-yes">Yes</label>
            </div>
            <div class="form-radio">
                <input class="form-radio-input" id="validation-no" name="validation-choice" type="radio" />
                <label class="form-radio-label" for="validation-no">No</label>
            </div>
            <span class="form-text">Required radio group state.</span>
        </div>
    `,
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                component: `Validation — purpose-driven component from the design system. Use this component for its primary role in the UI, follow the system tokens for spacing and colour, and ensure a clear accessible name is provided. Follow keyboard and screen-reader best practices when the component is interactive.

Design tokens: see the Tokens story under the theme section (theme/Tokens) for reference to CSS variables and token names.`,
            },
        },
    },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
