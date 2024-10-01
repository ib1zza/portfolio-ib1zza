import React, {useRef} from "react";
import s from "./Skills.module.scss";
import { useTranslation } from "react-i18next";
import HoverSkew from "../HoverSkew/HoverSkew";
import {motion, useScroll} from "framer-motion";

const Skills = () => {
  const { t } = useTranslation();
  const blockRef = useRef(null);
  const [currentHovered, setCurrentHovered] = React.useState(0);
  const { scrollXProgress, scrollYProgress } = useScroll({
    target: blockRef,
    offset: ["start center", "end center"],
  })


  console.log(scrollXProgress.get(), scrollYProgress)

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

  scrollYProgress.onChange((e) => {
    const currentItem = Math.floor(e * 3)

    if (currentItem !== currentHovered) setCurrentHovered(currentItem)
  })


  return (
    <div className={s.skillsBlock} ref={blockRef}>
      <div className={s.skillsBlock__grid}>
        {Object.keys(data).map((category: string, index: number) => (
          <HoverSkew
            settings={{
              max: 10,
              perspective: 500,
            }}
            key={category}
            withoutShine={true}
            index={index}
          >
            <div className={s.skill + " " + (index === currentHovered ? s.skill__hovered : "")}>
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
