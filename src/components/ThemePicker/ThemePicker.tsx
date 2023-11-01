import React, { useState } from "react";
import s from "./ThemePicker.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../../context/ThemeContext/useTheme";
import { Theme } from "../../context/ThemeContext/ThemeContext";

const themes: { name: string; value: Theme }[] = [
  {
    name: "Violet",
    value: Theme.VIOLET,
  },
  {
    name: "Green",
    value: Theme.GREEN,
  },
];

const ThemePicker = () => {
  const { theme: currentTheme, toggleTheme } = useTheme();
  const [listOpen, setListOpen] = useState(false);
  return (
    <div className={s.wrapper} onClick={() => setListOpen(!listOpen)}>
      <div className={s.circle}>
        <div className={s.innerCircle}></div>
      </div>
      <div className={s.arrow + (listOpen ? " " + s.open : "")}>
        <FontAwesomeIcon icon={faAngleDown} />
      </div>

      <div
        className={s.themeList + (listOpen ? " " + s.open : "")}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={s.trio} />
        {themes.map((theme, index) => {
          return (
            <div
              className={s.themeItem + " " + s[theme.value]}
              key={index}
              onClick={() => toggleTheme(theme.value)}
            >
              <div className={s.themeItemInnerCircle}></div>
              <span>{theme.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ThemePicker;
