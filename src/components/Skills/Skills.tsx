import React from "react";
import s from "./Skills.module.scss";
import BlockTitle from "../BlockTitle/BlockTitle";
const Skills = () => {
  return (
    <div className={s.skillsBlock}>
      <BlockTitle text={"skills"} />

      <div className={s.skillsBlock__grid}>
        <div className={s.col}>
          <div className={s.skill}>
            <h4>Languages</h4>
            <p>JavaScript TypeScript</p>
          </div>
        </div>
        <div className={s.col}>
          <div className={s.skill}>
            <h4>Databases</h4>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className={s.skill}>
            <h4>Other</h4>
            <p>HTML CSS SCSS</p>
          </div>
        </div>
        <div className={s.col}>
          <div className={s.skill}>
            <h4>Tools</h4>
            <p>Redux Redux-Toolkit RTK-Query Axios Tailwind.css</p>
          </div>
          <div className={s.skill}>
            <h4>Frameworks</h4>
            <p>React</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
