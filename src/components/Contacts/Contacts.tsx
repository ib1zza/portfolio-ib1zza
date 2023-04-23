import React from "react";
import BlockTitle from "../BlockTitle/BlockTitle";
import s from "./Contacts.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";
const Contacts = () => {
  const { t } = useTranslation();

  return (
    <div className={s.contactsBlock}>
      <BlockTitle text={t("global.contacts")} />
      <Element name={"contacts"} />
      <div className={s.contactsBlock__text}>
        <p>{t("me.contactsText")}</p>
        <section>
          <h3>{t("me.messageMeHere")}</h3>
          <div>
            <FontAwesomeIcon icon={faDiscord} /> #3634 ib1zza
          </div>
          <div>
            <FontAwesomeIcon icon={faTelegram} /> @ib1zza
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contacts;
