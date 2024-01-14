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
      onMouseOver={() => console.log("hover")}
      className={s.button + (className ? " " + className : "")}
      {...rest}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
