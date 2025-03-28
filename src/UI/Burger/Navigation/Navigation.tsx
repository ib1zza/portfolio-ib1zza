import * as React from "react";
import { motion } from "framer-motion";
import s from "../Burger.module.scss";
import { NavLink } from "react-router-dom";
import { AppRoutes } from "../../../AppRoutes";
import ChangeLang from "../../../components/ChangeLang/ChangeLang";
import { useTranslation } from "react-i18next";
import ThemePicker from "../../../components/ThemePicker/ThemePicker";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {links} from "../../../constants/links";
import {ThemeList} from "../../../components/ThemeList/ThemeList";

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
      delay: 0.2 * (custom),
    },
  }),
  hidden: (custom: number) => ({
    opacity: 0,
    transition: {
    },
  }),
};

const appLinks = [
  { name: "links.home", to: AppRoutes.HOME },
  { name: "links.works", to: AppRoutes.PROJECTS },
  // { name: "about-me", to: AppRoutes.NOT_FOUND },
  // { name: "contacts", to: AppRoutes.HOME },
];

export const Navigation = () => {
  const { t } = useTranslation();
  return (
    <>
      <motion.nav
        className={s.header__burger__nav}
        variants={NavVariants}
        initial={"hidden"}
        animate={"visible"}
        exit={"hidden"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {appLinks.map((link, i) => (
          <motion.div
            key={link.name}
            custom={i + 1}
            variants={NavLinkVariants}
            animate={"visible"}
            initial={"hidden"}
            exit={"hidden"}
            className={s.header__burger__nav__link}
          >
            <NavLink
              className={({ isActive }) =>
                isActive ? s.header__burger__nav__link__active : ""
              }
              to={link.to}
            >
              {t(link.name)}
            </NavLink>
          </motion.div>
        ))}

        <motion.div
          custom={3}
          variants={NavLinkVariants}
          animate={"visible"}
          initial={"hidden"}
          exit={"hidden"}
          className={s.header__burger__nav__link}
        >
          <ChangeLang inBurger={true} />
        </motion.div>

        <motion.div
          custom={4}
          variants={NavLinkVariants}
          animate={"visible"}
          initial={"hidden"}
          exit={"hidden"}
          className={s.header__burger__nav__link}
        >
          <ThemePicker/>
          <ThemeList />
        </motion.div>

        <motion.div
          custom={5}
          variants={NavLinkVariants}
          animate={"visible"}
          initial={"hidden"}
          exit={"hidden"}
          className={s.header__burger__socials}
          >
          {links.map((link) => (
              <a
                  key={link.href}
                  href={link.href}
                  target={"_blank"}
                  rel="noreferrer"
              >
                <FontAwesomeIcon icon={link.icon} />
              </a>
          ))}
        </motion.div>
      </motion.nav>
    </>
  );
};
