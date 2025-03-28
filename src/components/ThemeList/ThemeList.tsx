import s from "./ThemeList.module.scss"
import {motion} from "framer-motion";
import React from "react";
import {Theme} from "../../context/ThemeContext/ThemeContext";
import {useAnimationStore} from "../../store/store";
import {useTheme} from "../../context/ThemeContext/useTheme";

const themes: { name: string; value: Theme }[] = [
    {
        name: "Violet",
        value: Theme.VIOLET,
    },
    {
        name: "Violet Light",
        value: Theme.VIOLET_LIGHT,
    },
    {
        name: "Green",
        value: Theme.GREEN,
    },
    {
        name: "Green Light",
        value: Theme.GREEN_LIGHT,
    },
];


export const ThemeList = ({disableOnMobile = false}: { disableOnMobile?: boolean }) => {
    const {toggleTheme} = useTheme();

    const {isThemesMenuOpened: listOpen} = useAnimationStore();

    return (
            <motion.div
                variants={{
                    open: {
                        opacity: 1, y: 15, pointerEvents: "auto", transition: {
                            staggerChildren: 0.1
                        }
                    },
                    closed: {
                        opacity: 0, y: 10, pointerEvents: "none", transition: {
                            staggerChildren: 0.1,
                            staggerDirection: -1,
                            delay: 0.1
                        }
                    },
                }}
                initial="closed"
                animate={listOpen ? "open" : "closed"}
                className={s.themeList + (disableOnMobile ? " " + s.disableOnMobile : "")}
                onClick={(e) => e.stopPropagation()}
            >
                {themes.map((theme, index) => {
                    return (
                        <motion.div
                            variants={{
                                open: {
                                    opacity: 1,
                                    y:0
                                },
                                closed: {
                                    opacity: 0,
                                    y: 10
                                },
                            }}
                            className={s.themeItem + " " + s[theme.value]}
                            key={index}
                            onClick={() => toggleTheme(theme.value)}
                        >
                            <div className={s.themeItemInnerCircle}></div>
                            <span
                                className={
                                    s.themeItemName +
                                    " " +
                                    (theme.name.includes("Light") ? s.light : "")
                                }
                            >
                {theme.name}
              </span>
                        </motion.div>
                    );
                })}

                <div className={s.cover}/>
            </motion.div>
    );
};
