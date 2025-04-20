import React from "react";
import { links } from "../../constants/links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import s from "./LeftLinks.module.scss";

const LeftLinks = () => {
  return (
    <div className={s.container}>
      <div className={s.line} />
      {links.map((link) => (
        <a
          className={s.link}
          key={link.href}
          href={link.href}
          target={"_blank"}
          rel="noreferrer"
          aria-label={link.text}
        >
          <FontAwesomeIcon icon={link.icon} />
        </a>
      ))}
      <div className={s.line} />
    </div>
  );
};

export default LeftLinks;
