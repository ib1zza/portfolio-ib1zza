import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import s from "./Header.module.scss";
import Wrapper from "../../UI/Wrapper/Wrapper";
const Header = () => {
  return (
    <Wrapper>
      <header className={s.header}>
        <div className={s.header__logo}>
          <div className={s.react}>
            <FontAwesomeIcon icon={faReact} />{" "}
          </div>
          ib1zza
        </div>
        <div className={s.header__burger}>
          <a href="#" className={s.header__burger__button}>
            <span></span>
          </a>
          <nav className={s.header__burger__nav}>
            <a href="#">home</a>
            <a href="projects.html">works</a>
            <a href="#">about-me</a>
            <a href="#">contacts</a>
          </nav>
          <div className={s.header__burger__overlay}></div>
        </div>
        <div className={s.header__links}>
          <a href="#">home</a>
          <a href="projects.html">works</a>
          <a href="#">about-me</a>
          <a href="#">contacts</a>
        </div>
      </header>
    </Wrapper>
  );
};

export default Header;
