import React from 'react';
import s from "./Button.module.scss"

interface Props {
    children: React.ReactNode;
    onClick?: () => void;
}

const Button:React.FC<Props> = ({children, onClick}) => {
    return (
        <button className={s.button}>
            {children}
        </button>
    );
};

export default Button;