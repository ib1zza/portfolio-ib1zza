import React from "react";
import s from "./Skills.module.scss";
import BlockTitle from "../BlockTitle/BlockTitle";
import { useTranslation } from "react-i18next";
const Skills = () => {
  const { t } = useTranslation();

  const data = {
    [t("skills.languages")]: ["JavaScript", "TypeScript"],
    [t("skills.frameworks")]: ["React"],
    [t("skills.tools")]: [
      "Redux",
      "Redux-thunk",
      "Redux-Toolkit",
      "RTK-Query",
      "Axios",
      "Tailwind.css",
      "framer-motion",
      "i18next",
    ],
    [t("skills.other")]: ["HTML", "CSS", "SCSS"],
  };

  return (
    <div className={s.skillsBlock}>
      <div className={s.skillsBlock__grid}>
        {Object.keys(data).map((category: string) => (
          <div className={s.skill} key={category}>
            <h4>{category}</h4>
            {/*@ts-ignore*/}
            <p>{data[category].join(" ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
