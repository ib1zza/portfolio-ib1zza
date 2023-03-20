import React from "react";
import s from "./Button.module.scss";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  [x: string]: any;
  className?: string;
}
const button = {
  open: {
    scale: 1.1,
    borderRadius: 20,

    transition: {
      type: "spring",

      duration: 0.4,
    },
  },
  closed: {
    translateX: 20,
    transition: {
      type: "spring",
      stiffness: 400,

      duration: 0.2,
    },
  },
};
const Button: React.FC<Props> = ({ children, onClick, className, ...rest }) => {
  console.log(rest);
  return (
    <motion.button
      className={s.button + (className ? " " + className : "")}
      {...rest}
      variants={button}
      whileHover={"open"}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default Button;
