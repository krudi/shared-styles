export type ButtonArgs = {
    label: string;
    variant:
        | 'primary'
        | 'secondary'
        | 'success'
        | 'info'
        | 'warning'
        | 'danger'
        | 'white'
        | 'outline-primary'
        | 'outline-secondary'
        | 'outline-success'
        | 'outline-info'
        | 'outline-warning'
        | 'outline-danger'
        | 'outline-white'
        | 'link';
    size: 'default' | 'sm';
    disabled: boolean;
};
