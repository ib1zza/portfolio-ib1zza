import React from "react";
import s from "./Welcome.module.scss";
import Button from "../../UI/Button/Button";
import photo from "../../assets/img/im.jpg";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

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

      <div className={s.welcomeBlock__photo}>
        <img src={photo} alt="me" />
      </div>
    </div>
  );
};

export default Welcome;
