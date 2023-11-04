import React, { MouseEvent, useEffect, useState } from "react";
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

const ThemePicker = () => {
  const { toggleTheme } = useTheme();
  const [listOpen, setListOpen] = useState(false);

  useEffect(() => {
    function listener() {
      setListOpen(false);
    }
    if (listOpen) {
      document.body.addEventListener("click", listener, {
        once: true,
      });
    }

    return () => {
      document.body.removeEventListener("click", listener);
    };
  }, [listOpen]);

  function toggleList(e: MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
    setListOpen(!listOpen);
  }

  return (
    <div className={s.wrapper} onClick={toggleList}>
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
              <span
                className={
                  s.themeItemName +
                  " " +
                  (theme.name.includes("Light") ? s.light : "")
                }
              >
                {theme.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ThemePicker;
