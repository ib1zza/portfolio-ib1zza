import { createContext, FC, useMemo, useState } from "react";

export enum Theme {
  VIOLET = "violet",
  GREEN = "green",
}

export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}
export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = "theme";

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) ||
  Theme.GREEN) as Theme;

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

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
