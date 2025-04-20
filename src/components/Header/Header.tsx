import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import s from "./Header.module.scss";
import { motion, useScroll, useSpring } from "framer-motion";
import Burger from "../../UI/Burger/Burger";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AppRoutes } from "../../AppRoutes";
import { useTranslation } from "react-i18next";
import ChangeLang from "../ChangeLang/ChangeLang";
import ThemePicker from "../ThemePicker/ThemePicker";
import Flip from "../Flip/Flip";
import {useAnimationStore} from "../../store/store";
import {useLenis} from "../SmoothScroll/SmoothScroll";
const Header = () => {
  const { scrollYProgress } = useScroll();
  const { isMainTransitionEnded } = useAnimationStore();

  const { t } = useTranslation();
  const [burger, setBurger] = useState(false);
  const setStyles = (isActive: boolean) => {
    return isActive ? s.link__active : s.link;
  };
  const { pathname } = useLocation();

  useEffect(() => {
    setBurger(false);
  }, [pathname]);


  useEffect(() => {
      scrollYProgress.set(0)
  }, [isMainTransitionEnded, scrollYProgress]);


  return (
    <div className={s.headerContainer}>
      <header className={s.header}>
        <motion.div
          className={s.header__progress}
          style={{ scaleX: isMainTransitionEnded ? scrollYProgress : 0 }}
        />

        <Link to={AppRoutes.HOME} aria-label={'Go to home page'}>
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

              {/*<motion.svg initial={'initial'} animate={'animate'}  className={s.icon} width="70" height="70" viewBox="0 0 34 40" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
              {/*  <path d="M7.99763 16.0278C11.9013 12.1241 16.9941 6.53133 16.9941 7.03133C16.9941 7.53133 16.9941 36.5197 16.9941 37.0195C16.9941 37.5193 32.488 22.0254 31.9882 22.0254C31.4884 22.0254 2 22 2 22" stroke="currentColor"  stroke-linecap="round"/>*/}
              {/*  <motion.circle cx="17" cy="2" r="2" fill="currentColor"/>*/}
              {/*</motion.svg>*/}
            </div>
            <Flip />
          </div>
        </Link>
        <Burger onChange={setBurger} flag={burger} />

        <div className={s.header__navigation}>
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
        </div>
        <div className={s.header__links}>
          <ChangeLang />
          <ThemePicker />
        </div>
      </header>
      <div className={s.background}/>
      <div className={s.cover}/>
    </div>
  );
};

export default Header;
