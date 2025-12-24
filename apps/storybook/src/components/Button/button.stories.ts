import type { Meta, StoryObj } from '@storybook/html';

type ButtonArgs = {
    label: string;
    variant: 'primary' | 'secondary' | 'ghost';
    size: 'sm' | 'md' | 'lg';
    disabled: boolean;
};

const renderButton = ({ label, variant, size, disabled }: ButtonArgs) => `
    <button class="btn ${variant} ${size}" ${disabled ? 'disabled' : ''} aria-label="${label}">
        ${label}
    </button>
`;

const meta: Meta<ButtonArgs> = {
    title: 'Components/Button',
    tags: ['autodocs'],
    render: renderButton,
    argTypes: {
        label: { control: 'text', description: 'Text inside the button' },
        variant: {
            control: 'inline-radio',
            options: ['primary', 'secondary', 'ghost'],
            description: 'Visual style',
        },
        size: {
            control: 'inline-radio',
            options: ['sm', 'md', 'lg'],
            description: 'Size of the button',
        },
        disabled: { control: 'boolean', description: 'Disable the button' },
    },
    parameters: {
        layout: 'centered',
    },
};

export default meta;

export const Playground: StoryObj<ButtonArgs> = {
    args: {
        label: 'Action',
        variant: 'primary',
        size: 'md',
        disabled: false,
    },
};

export const MobilePrimary: StoryObj<ButtonArgs> = {
    args: {
        label: 'Mobile CTA',
        variant: 'primary',
        size: 'md',
        disabled: false,
    },
    globals: {
        viewport: {
            value: 'mobile',
            isRotated: false
        }
    },
};
