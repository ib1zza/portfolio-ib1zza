import React from "react";
import BlockTitle from "../BlockTitle/BlockTitle";
import s from "./Contacts.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faTelegram } from "@fortawesome/free-brands-svg-icons";
const Contacts = () => {
  return (
    <div className={s.contactsBlock}>
      <BlockTitle text={"contacts"} />

      <div className={s.contactsBlock__text}>
        <p>
          I'm always open to suggestions for collaborative development! I like
          to get the experience of teamwork on projects. If you are interested,
          please write to me!
        </p>
        <section>
          <h3>Message me here</h3>
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
