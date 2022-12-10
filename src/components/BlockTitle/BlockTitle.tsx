import React from 'react';
import s from "./BlockTitle.module.scss"

interface Props {
    text: string;
    children?: React.ReactNode
}
const BlockTitle:React.FC<Props> = ({text, children}) => {
    return (
        <div className={s.title}>
            <h1>{text}</h1>
            <div className={s.title__line}/>
            <div className={s.title__more}>
                {children}
            </div>
        </div>
    );
};

export default BlockTitle;
