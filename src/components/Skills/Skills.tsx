import React from "react";
import s from "./Skills.module.scss";
import BlockTitle from "../BlockTitle/BlockTitle";
const Skills = () => {
  const data = {
    languages: ["JavaScript", "TypeScript"],
    frameworks: ["React"],
    tools: [
      "Redux",
      "Redux-thunk",
      "Redux-Toolkit",
      "RTK-Query",
      "Axios",
      "Tailwind.css",
      "framer-motion",
    ],
    other: ["HTML", "CSS", "SCSS"],
  };

  return (
    <div className={s.skillsBlock}>
      <BlockTitle text={"skills"} />

      <div className={s.skillsBlock__grid}>
        {Object.keys(data).map((category) => (
          <div className={s.skill}>
            <h4>{category}</h4>
            {/* @ts-ignore*/}
            <p>{data[category].join(" ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
