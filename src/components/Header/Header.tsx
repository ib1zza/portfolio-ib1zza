import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import s from "./Header.module.scss";
import { motion } from "framer-motion";
import Burger from "../../UI/Burger/Burger";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AppRoutes } from "../../AppRoutes";
import { useTranslation } from "react-i18next";
import ChangeLang from "../ChangeLang/ChangeLang";
import ThemePicker from "../ThemePicker/ThemePicker";
const Header = () => {
  const { t } = useTranslation();
  const [burger, setBurger] = useState(false);
  const setStyles = (isActive: boolean) => {
    return isActive ? s.link__active : s.link;
  };
  const { pathname } = useLocation();

  useEffect(() => {
    setBurger(false);
  }, [pathname]);

  return (
    <header className={s.header}>
      <Link to={AppRoutes.HOME}>
        <div className={s.header__logo}>
          <div className={s.header__logo__reactContainer}>
            <motion.div
              className={s.react}
              animate={{ rotate: 360 }}
              transition={{
                duration: 3,
                ease: "linear",
                repeatType: "loop",
                repeat: Infinity,
              }}
            >
              <FontAwesomeIcon icon={faReact} />{" "}
            </motion.div>
          </div>
          <span>ib1zza</span>
        </div>
      </Link>
      <Burger onChange={setBurger} flag={burger} />
      <div className={s.header__links}>
        <NavLink
          className={({ isActive }) => setStyles(isActive)}
          to={AppRoutes.HOME}
        >
          {t("links.home")}
        </NavLink>
        <NavLink
          className={({ isActive }) => setStyles(isActive)}
          to={AppRoutes.PROJECTS}
        >
          {t("links.works")}
        </NavLink>
        <ChangeLang />
        <ThemePicker />
      </div>
    </header>
  );
};

export default Header;
