import React from "react";
import { langs } from "../../locales/i18n";
import i18n from "i18next";
import s from "./ChangeLang.module.scss";

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
        <button
          key={lang}
          className={
            s.lang + " " + (i18n.resolvedLanguage === lang ? s.active : "")
          }
          onClick={() => onClick(lang)}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default ChangeLang;
