import React from "react";
import s from "./Welcome.module.scss";
import Button from "../../UI/Button/Button";
import photo from "../../assets/img/im.jpg";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const button = {
  open: {
    borderRadius: "20%",
    // scale: 1.4,

    transition: {
      type: "spring",
      duration: 1,
    },
  },
  closed: {},
};

const Welcome = () => {
  const { t } = useTranslation();
  return (
    <div className={s.welcomeBlock}>
      <div className={s.welcomeBlock__text}>
        <h1>{t("me.heading")}</h1>
        <p>{t("me.subheading")}</p>
        <Link to={"contacts"} smooth={true} offset={-70} duration={500}>
          <Button>{t("me.contactme")}</Button>
        </Link>
      </div>

      <motion.div
        variants={button}
        whileHover={"open"}
        className={s.welcomeBlock__photo}
      >
        <img src={photo} alt="me" />
      </motion.div>
    </div>
  );
};

export default Welcome;
