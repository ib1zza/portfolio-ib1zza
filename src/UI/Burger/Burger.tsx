import React from "react";
import {AnimatePresence, motion, Variants} from "framer-motion";
import s from "./Burger.module.scss";
import MenuToggle from "./MenuToggle/MenuToggle";
import { Navigation } from "./Navigation/Navigation";

interface Props {
  flag: boolean;
  onChange: (flag: boolean) => void;
}

const sidebar:Variants = {
  open: (height = 1000) => ({
    clipPath: `circle(120vh at calc(100% - 27.5px) 25px)`,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(2px at calc(100% - 27.5px) 25px)",
    opacity: 0,
    transition: {
      opacity: {
        duration: 0.2,
        delay: 0.7
      },
      // delay: 0.5,
      duration: 0.3,
      // type: "spring",
      // stiffness: 20,
      restDelta: 2,
    },
  },
};

const overlayVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const Burger: React.FC<Props> = ({ flag, onChange }) => {
  const toggler = () => onChange(!flag);
  return (
    <motion.div className={s.header__burger} animate={flag ? "open" : "closed"}>
      <motion.div
        initial={false}
        className={s.burger__background}
        variants={sidebar}
      />
      <MenuToggle toggle={toggler} flag={flag} />

      <AnimatePresence mode="wait">
        {flag && (
          <>
            <Navigation />
            <motion.div
              onClick={() => onChange(false)}
              className={s.header__burger__overlay}
              variants={overlayVariants}
              initial={"hidden"}
              animate={"visible"}
              exit={"hidden"}
              transition={{ duration: 0.3 }}
            />
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Burger;
