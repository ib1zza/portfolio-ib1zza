import React from "react";
import s from "./Button.module.scss";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void;
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
