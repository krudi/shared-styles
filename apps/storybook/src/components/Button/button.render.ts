import type { ButtonArgs } from './button.types';

export const renderButton = ({ label, variant, size, disabled }: ButtonArgs): string => {
    const classes = ['btn', `btn-${variant}`];

    if (size === 'sm') {
        classes.push('btn-sm');
    }

    return `
    <button class="${classes.join(' ')}" type="button" ${disabled ? 'disabled' : ''} aria-label="${label}">
        ${label}
    </button>
`;
};
