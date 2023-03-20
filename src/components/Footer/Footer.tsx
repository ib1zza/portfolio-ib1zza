import React from "react";
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
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <>
      <div className={s.footer__borderTop} />
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
              <motion.a href="https://t.me/ib1zza">
                <FontAwesomeIcon icon={faTelegram} />
              </motion.a>
              <motion.a href="https://github.com/ib1zza">
                <FontAwesomeIcon icon={faGithub} />
              </motion.a>
              <motion.a href="https://vk.com/ib1zza">
                <FontAwesomeIcon icon={faVk} />
              </motion.a>
              <motion.a href="mailto: dremast1337@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} />
              </motion.a>
            </div>
          </div>
          <span>© Copyright {new Date().getFullYear()}. Made by ib1zza</span>
        </div>
      </Wrapper>
    </>
  );
};

export default Footer;
