import type { Meta, StoryObj } from '@storybook/html-vite';

const meta = {
    title: 'Showcase/Completed Form',
    tags: ['autodocs'],
    render: (): string => `
        <form class="form-block" aria-label="Completed profile form">
            <fieldset class="fieldset">
                <legend class="legend">Profile details</legend>

                <div class="form-block">
                    <label class="form-label" for="showcase-full-name">Full name</label>
                    <input class="form-control" id="showcase-full-name" type="text" value="Jane Doe" />
                </div>

                <div class="form-block">
                    <label class="form-label" for="showcase-email">Email</label>
                    <input class="form-control" id="showcase-email" type="email" value="jane.doe@example.com" />
                </div>

                <div class="form-block">
                    <label class="form-label" for="showcase-username">Username</label>
                    <div class="form-input-group">
                        <span class="form-input-group-text">@</span>
                        <input class="form-control" id="showcase-username" type="text" value="janedoe" />
                        <button class="btn btn-default" type="button">Check</button>
                    </div>
                </div>
            </fieldset>

            <fieldset class="fieldset">
                <legend class="legend">Preferences</legend>

                <div class="form-block">
                    <span class="form-label">Notifications</span>
                    <div class="form-checkbox">
                        <input class="form-checkbox-input" id="showcase-notify-email" type="checkbox" checked />
                        <label class="form-checkbox-label" for="showcase-notify-email">Email updates</label>
                    </div>
                    <div class="form-checkbox">
                        <input class="form-checkbox-input" id="showcase-notify-sms" type="checkbox" checked />
                        <label class="form-checkbox-label" for="showcase-notify-sms">SMS alerts</label>
                    </div>
                </div>

                <div class="form-block">
                    <span class="form-label">Billing cycle</span>
                    <div class="form-radio">
                        <input
                            class="form-radio-input"
                            id="showcase-billing-monthly"
                            name="showcase-billing"
                            type="radio"
                            checked
                        />
                        <label class="form-radio-label" for="showcase-billing-monthly">Monthly</label>
                    </div>
                    <div class="form-radio">
                        <input
                            class="form-radio-input"
                            id="showcase-billing-annual"
                            name="showcase-billing"
                            type="radio"
                        />
                        <label class="form-radio-label" for="showcase-billing-annual">Annual</label>
                    </div>
                </div>
            </fieldset>

            <fieldset class="fieldset">
                <legend class="legend">Completion</legend>
                <div class="form-block">
                    <label class="form-label" for="showcase-progress">Profile completion</label>
                    <div class="form-control-file-progress-bar-wrapper">
                        <progress
                            class="form-control-file-progress-bar"
                            id="showcase-progress"
                            value="80"
                            max="100"
                        ></progress>
                    </div>
                </div>
            </fieldset>

            <div class="form-block">
                <div class="btn-group mt-1">
                    <button class="btn btn-default" type="submit">Save changes</button>
                    <button class="btn btn-secondary" type="button">Cancel</button>
                </div>
            </div>
        </form>
    `,
    parameters: {
        controls: { disable: true },
        docs: {
            description: {
                component:
                    'A composed form that showcases how shared form primitives work together in a realistic layout.',
            },
        },
    },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Playground: Story = {};
