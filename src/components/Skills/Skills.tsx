import React, {useRef} from "react";
import s from "./Skills.module.scss";
import {useTranslation} from "react-i18next";
import HoverSkew from "../HoverSkew/HoverSkew";
import {useScroll} from "framer-motion";
import {motion} from "framer-motion";

const Skills = () => {
    const {t} = useTranslation();
    const blockRef = useRef(null);
    const [currentHovered, setCurrentHovered] = React.useState(-1);
    const {scrollYProgress} = useScroll({
        target: blockRef,
        // offset: ["0 0.5", "0 0.5"],
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
        const currentItem = Math.floor(e * 4) - 1

        if (currentItem !== currentHovered) setCurrentHovered(currentItem)
    })

    console.log(currentHovered)


    // @ts-ignore
    return (
        <div className={s.skillsBlock} ref={blockRef}>
            <motion.div
                layout
                className={s.skillsBlock__grid}>
                {Object.keys(data).map((category: string, index: number) => (
                    <HoverSkew
                        settings={{
                            max: 10,
                            perspective: 500,
                        }}
                        key={category}
                        withoutShine={true}
                        index={index}
                        variants={{
                            [`item_${index}`]: {
                                flexGrow: 1,
                            },
                            inactive: {
                                flexGrow: 0,
                            }
                        }}
                        animate={`item_${currentHovered}`}
                        initial="inactive"
                    >
                        <motion.div
                            variants={{
                                [`item_${index}`]: {
                                    ['--opacity']: 1,
                                },
                                inactive: {
                                   // @ts-ignore
                                   '--opacity': 0,
                                }
                            }}
                            className={s.skill + " " + (index === currentHovered ? s.skill__hovered : "")}>
                            <h4>{category}</h4>
                            <div className={s.skillList}>
                                {data[category].map((item: string) =>
                                    <a key={item} target={"_blank"} rel={"noreferrer"}
                                       href={`https://www.google.com/search?q=${item}`}>
                                        {item}
                                    </a>)}
                            </div>
                        </motion.div>
                    </HoverSkew>
                ))}
            </motion.div>
        </div>
    );
};

export default Skills;
