import React from "react";
import s from "./Button.module.scss";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  [x: string]: any;
  className?: string;
}

const Button: React.FC<Props> = ({ children, onClick, className, ...rest }) => {
  return (
    <button
      className={s.button + (className ? " " + className : "")}
      {...rest}
      onClick={onClick}
    >
     <div className={s.button__content}>
       {children}
     </div>
    </button>
  );
};

export default Button;
