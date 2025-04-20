import React from "react";
import Wrapper from "../../UI/Wrapper/Wrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import s from "./Footer.module.scss";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { links } from "../../constants/links";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <Wrapper>
        <div className={s.footer__borderTop} />

        <div className={s.footer}>
          <div className={s.footer__logo}>
            <div className={s.react}>
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
            ib1zza
          </div>
          <div className={s.footer__media}>
            <h2>{t("global.media")}</h2>
            <div className={s.footer__media__links}>
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={"_blank"}
                  rel="noreferrer"
                  aria-label={link.text}
                >
                  <FontAwesomeIcon icon={link.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Footer;
