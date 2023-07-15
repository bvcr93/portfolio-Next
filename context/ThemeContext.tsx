import { ReactNode, createContext } from "react";
import { useState, useEffect } from "react";

interface IThemeContext {
  dark: boolean;
  toggle: () => void;
}
interface IThemeProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext<IThemeContext>({
  dark: false,
  toggle: () => {},
});

export const ThemeProvider = ({ children }: IThemeProviderProps) => {
  const [dark, setDark] = useState<boolean>(false);
  const themeClass = dark ? "dark" : "";

  useEffect(() => {
    const isDark = localStorage.getItem("darkTheme") === "true";
    setDark(isDark);
  }, []);

  const toggle = (): void => {
    const newTheme = !dark;
    localStorage.setItem("darkTheme", JSON.stringify(newTheme));
    setDark(newTheme);
  };

  const value = { dark, toggle };

  return (
    <ThemeContext.Provider value={value}>
      <div className={themeClass}>{children}</div>
    </ThemeContext.Provider>
  );
};
