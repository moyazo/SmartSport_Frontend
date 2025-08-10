export type Props = {
    disabled?: boolean;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    style?: React.CSSProperties;
    id?: string;
    children?: React.ReactNode;
    content: string;
};
