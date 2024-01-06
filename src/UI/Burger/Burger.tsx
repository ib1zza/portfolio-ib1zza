import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import s from "./Burger.module.scss";
import MenuToggle from "./MenuToggle/MenuToggle";
import { Navigation } from "./Navigation/Navigation";

interface Props {
  flag: boolean;
  onChange: (flag: boolean) => void;
}

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100% - 40px) 55px)`,

    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(25px at calc(100% - 40px) 55px)",

    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
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
        style={{ position: flag ? "fixed" : "absolute" }}
      />
      <MenuToggle toggle={toggler} />

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
