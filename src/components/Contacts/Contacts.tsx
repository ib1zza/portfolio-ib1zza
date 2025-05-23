import React from "react";
import s from "./Contacts.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";
import { Element } from "react-scroll";
import HoverSkew from "../HoverSkew/HoverSkew";

const Contacts = () => {
  const { t } = useTranslation();

  return (
    <div className={s.contactsBlock}>
      <div className={s.contactsBlock__text}>
        <p>{t("me.contactsText")}</p>
        <HoverSkew withoutShine>


        <section className={s.contactsBlock__section}>
          <h2 className={s.msg}>{t("me.messageMeHere")}</h2>
          <div>
            <FontAwesomeIcon icon={faDiscord} />
            @ib1zza
          </div>
          <a href={"https://t.me/ib1zza"} target={"_blank"} rel="noreferrer" aria-label="Contact me on Telegram">
            <FontAwesomeIcon icon={faTelegram} />
            @ib1zza
          </a>
        </section>
        </HoverSkew>
      </div>
      <Element name={"contacts"} />
    </div>
  );
};

export default Contacts;
