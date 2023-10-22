import React from "react";
import { langs } from "../../locales/i18n";
import i18n from "i18next";
import s from "./ChangeLang.module.scss";

const ChangeLang: React.FC<{ color?: string }> = ({ color }) => {
  return (
    <div className={s.changeLanguage}>
      {langs.map((lang) => (
        <button
          style={color ? { color: color } : {}}
          key={lang}
          className={
            s.lang + " " + (i18n.resolvedLanguage === lang ? s.active : "")
          }
          onClick={() => i18n.changeLanguage(lang)}
        >
          {lang}
        </button>
      ))}
    </div>
  );
};

export default ChangeLang;
