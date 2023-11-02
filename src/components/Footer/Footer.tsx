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
import { useTranslation } from "react-i18next";

const links = [
  {
    href: "https://t.me/ib1zza",
    text: "telegram",
    icon: faTelegram,
  },
  {
    href: "https://github.com/ib1zza",
    text: "github",
    icon: faGithub,
  },
  {
    href: "https://vk.com/ib1zza",
    text: "vk",
    icon: faVk,
  },
  {
    href: "mailto:Ks5nI@example.com",
    text: "email",
    icon: faEnvelope,
  },
];
const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className={s.footer__borderTop} />
      <Wrapper>
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
                <a key={link.href} href={link.href} target={"_blank"}>
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
