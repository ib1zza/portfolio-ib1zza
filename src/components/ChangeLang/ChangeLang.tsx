import React from "react";
import { langs } from "../../locales/i18n";
import i18n from "i18next";
import s from "./ChangeLang.module.scss";
import Button from "../../UI/Button/Button";
import button from "../../UI/Button/Button";

interface Props {
  inBurger?: boolean;
}
const ChangeLang = ({ inBurger }: Props) => {
  function onClick(lang: string) {
    i18n.resolvedLanguage !== lang && i18n.changeLanguage(lang);
  }
  return (
    <div className={s.changeLanguage + " " + (inBurger ? s.inBurger : "")}>
      {langs.map((lang) => (
          <Button key={lang} className={ s.lang + " " + (i18n.resolvedLanguage === lang ? s.active : "")} onClick={() => onClick(lang)}>
            {lang.toUpperCase()}
          </Button>
      ))}
    </div>
  );
};

export default ChangeLang;
