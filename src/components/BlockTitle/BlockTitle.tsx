import React from "react";
import s from "./BlockTitle.module.scss";
import { motion } from "framer-motion";

interface Props {
  text: string;
  children?: React.ReactNode;
}

const AnimationVariants = {
  hidden: { opacity: 0, x: -200 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -200 },
};
const BlockTitle: React.FC<Props> = ({ text, children }) => {
  return (
    <motion.div
      className={s.title}
      viewport={{ amount: 0.2 }}
      initial={"hidden"}
      whileInView={"visible"}
      exit={"exit"}
      variants={AnimationVariants}
      transition={{ duration: 0.2 }}
    >
      <h1>{text}</h1>
      <div className={s.title__line} />
      <div className={s.title__more}>{children}</div>
    </motion.div>
  );
};

export default BlockTitle;
