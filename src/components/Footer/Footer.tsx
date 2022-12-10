import React from "react";
import "../../scss/index.scss";
import Wrapper from "../../UI/Wrapper/Wrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faReact,
  faTelegram,
  faVk,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import s from "./Footer.module.scss";
const Footer = () => {
  return (
    <Wrapper>
      <div className={s.footer}>
        <div className={s.footer__logo}>
          <div className={s.react}>
            <FontAwesomeIcon icon={faReact} />
          </div>
          ib1zza
        </div>
        <div className={s.footer__media}>
          <h2>Media</h2>
          <div className={s.footer__media__links}>
            <a href="#">
              <FontAwesomeIcon icon={faTelegram} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faVk} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>
        <span>© Copyright 2022. Made by ib1zza</span>
      </div>
    </Wrapper>
  );
};

export default Footer;
