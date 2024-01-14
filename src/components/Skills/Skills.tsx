import React from "react";
import s from "./Skills.module.scss";
import { useTranslation } from "react-i18next";
import HoverSkew from "../HoverSkew/HoverSkew";
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
          <HoverSkew
            settings={{
              max: 10,
              perspective: 500,
            }}
            key={category}
          >
            <div className={s.skill}>
              <h4>{category}</h4>
              <p>{data[category].join(" ")}</p>
            </div>
          </HoverSkew>
        ))}
      </div>
    </div>
  );
};

export default Skills;
