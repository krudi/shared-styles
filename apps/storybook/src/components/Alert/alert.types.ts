export type AlertArgs = {
    title: string;
    description: string;
    variant: 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'white';
    dismissible: boolean;
};
