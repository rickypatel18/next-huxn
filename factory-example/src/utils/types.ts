export interface ModalProps {
    header: string,
    content: string,
    footer: string
}

export interface CardProps {
    title: string;
    content: string;
    footer: string
}

export interface ButtonProps {
    label: string;
    onclick: () => void;
    disabled: boolean
}