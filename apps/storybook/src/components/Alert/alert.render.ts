import type { AlertArgs } from './alert.types';

export const renderAlert = (): string => `
    <div class="alert alert-primary">
        <p class="alert-title">Primary alert</p>
        <span class="alert-description">Use to highlight important information.</span>
        <button type="button" class="btn btn-close alert-close" aria-label="Close">
            <span aria-hidden="true">×</span>
        </button>
    </div>
    <div class="alert alert-success">
        <p class="alert-title">Success alert</p>
        <span class="alert-description">Action completed. Keep it short.</span>
    </div>
    <div class="alert alert-info">
        <p class="alert-title">Info alert</p>
        <span class="alert-description">Additional context without blocking.</span>
    </div>
    <div class="alert alert-warning">
        <p class="alert-title">Warning alert</p>
        <span class="alert-description">Draw attention to risky actions.</span>
    </div>
    <div class="alert alert-danger">
        <p class="alert-title">Danger alert</p>
        <span class="alert-description">Critical issue that needs immediate action.</span>
    </div>
    <div class="alert alert-white">
        <p class="alert-title">Neutral alert</p>
        <span class="alert-description">Use on light backgrounds when colour is not desired.</span>
    </div>
`;

export const renderAlertPlayground = ({ title, description, variant, dismissible }: AlertArgs): string => `
    <div class="alert alert-${variant}">
        <p class="alert-title">${title}</p>
        <span class="alert-description">${description}</span>
        ${
            dismissible
                ? `<button type="button" class="btn btn-close alert-close" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>`
                : ''
        }
    </div>
`;
