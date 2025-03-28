import {createContext, FC, useEffect, useMemo, useState} from "react";

export enum Theme {
  VIOLET = "violet",
  GREEN = "green",
  VIOLET_LIGHT = "violetLight",
  GREEN_LIGHT = "greenLight",
}

export interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const LOCAL_STORAGE_THEME_KEY = "theme";
const themeFromLs = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme;

// check if Theme includes themeFrom ls
const defaultTheme = Object.values(Theme).includes(themeFromLs as Theme) ? themeFromLs : Theme.GREEN;

export const ThemeContext = createContext<ThemeContextProps>({
  theme: defaultTheme,
  setTheme: () => {},
});

interface ThemeProviderProps {
  initialTheme?: Theme;
  children: React.ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const { initialTheme, children } = props;
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
    const app = document.querySelector(".App") as Element;
    const bgColor = getComputedStyle(app).getPropertyValue("--bgColor");
    const accentColor = getComputedStyle(app).getPropertyValue("--accentColor");
    const accentLightColor = getComputedStyle(app).getPropertyValue(
      "--accentLightColor"
    )
    const textGrayColor = getComputedStyle(app).getPropertyValue("--textGrayColor");

    const appVars = { bgColor, accentColor, accentLightColor, textGrayColor };

    Object.entries(appVars).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--${key}`, value);
    })
  }, [theme])

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
