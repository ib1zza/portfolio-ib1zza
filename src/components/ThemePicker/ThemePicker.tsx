import React, {MouseEvent, useEffect, useState} from "react";
import s from "./ThemePicker.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import {useTheme} from "../../context/ThemeContext/useTheme";
import {Theme} from "../../context/ThemeContext/ThemeContext";
import {motion} from "framer-motion";
import {useAnimationStore} from "../../store/store";


const ThemePicker = () => {
    const {isThemesMenuOpened, setThemesMenuOpened} = useAnimationStore()
    useEffect(() => {
        function listener() {
            setThemesMenuOpened(false);
        }

        if (isThemesMenuOpened) {
            document.body.addEventListener("click", listener, {
                once: true,
            });
        }

        return () => {
            document.body.removeEventListener("click", listener);
        };
    }, [isThemesMenuOpened]);

    function toggleList(e: MouseEvent<HTMLDivElement>) {
        e.stopPropagation();
        setThemesMenuOpened(!isThemesMenuOpened);
    }

    return (
        <div className={s.wrapper} onClick={toggleList}>
            <div className={s.circle + " cursorHover"}>
                <div className={s.innerCircle}></div>
            </div>
            <div
                className={s.arrow + " cursorHover" + (isThemesMenuOpened ? " " + s.open : "")}
            >
                <FontAwesomeIcon icon={faAngleDown}/>
            </div>
        </div>
    );
};

export default ThemePicker;
