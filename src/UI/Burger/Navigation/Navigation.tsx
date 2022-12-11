import * as React from "react";
import { motion } from "framer-motion";
import s from "../../../components/Header/Header.module.scss";
import { NavLink } from "react-router-dom";
import { AppRoutes } from "../../../AppRoutes";

const NavVariants = {
  visible: {
    opacity: 1,
  },
  hidden: { opacity: 0 },
};

const NavLinkVariants = {
  visible: (custom: number) => ({
    opacity: 1,
    transition: {
      delay: 0.2 * custom,
    },
  }),
  hidden: (custom: number) => ({
    opacity: 0,
    transition: {
      delay: 0.15 * custom,
    },
  }),
};

const links = [
  { name: "home", to: AppRoutes.HOME },
  { name: "works", to: AppRoutes.HOME },
  { name: "about-me", to: AppRoutes.HOME },
  { name: "contacts", to: AppRoutes.HOME },
];

export const Navigation = () => (
  <>
    <motion.nav
      // layout
      className={s.header__burger__nav}
      variants={NavVariants}
      initial={"hidden"}
      animate={"visible"}
      exit={"hidden"}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      {links.map((link, i) => (
        <motion.div
          key={link.name}
          custom={i}
          variants={NavLinkVariants}
          animate={"visible"}
          initial={"hidden"}
          exit={"hidden"}
          className={s.header__burger__nav__link}
        >
          <NavLink to={link.to}>{link.name}</NavLink>
        </motion.div>
      ))}
    </motion.nav>
  </>
);
