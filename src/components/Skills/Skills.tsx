import React, {useRef} from "react";
import s from "./Skills.module.scss";
import {useTranslation} from "react-i18next";
import HoverSkew from "../HoverSkew/HoverSkew";
import {useScroll} from "framer-motion";

const Skills = () => {
    const {t} = useTranslation();
    const blockRef = useRef(null);
    const [currentHovered, setCurrentHovered] = React.useState(0);
    const {scrollYProgress} = useScroll({
        target: blockRef,
        offset: ["start center", "end center"],
    })

    const data = {
        [t("skills.languages")]: ["JavaScript", "TypeScript"],
        [t("skills.frameworks")]: ["React", "NextJS", "React Native"],
        [t("skills.tools")]: [
            "Redux",
            "Redux-thunk",
            "Redux-Toolkit",
            "RTK-Query",
            "React Query",
            "Axios",
            "framer-motion",
            "i18next",
            "Jest",
            "Cypress",
            "Storybook",
            "react-hook-form",
            "Three.js",
            "react-three-fiber",
        ],
        [t("skills.other")]: ["HTML", "CSS", "SCSS", "Tailwind.css", "NativeWind", "Webpack", "Vite", "ESLint"],
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
                            <div className={s.skillList}>
                                {data[category].map((item: string) =>
                                    <a target={"_blank"} rel={"noreferrer"}
                                       href={`https://www.google.com/search?q=${item}`}>
                                        {item}
                                    </a>)}
                            </div>
                        </div>
                    </HoverSkew>
                ))}
            </div>
        </div>
    );
};

export default Skills;
