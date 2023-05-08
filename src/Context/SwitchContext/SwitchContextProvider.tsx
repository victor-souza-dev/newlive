import { ThemeProvider } from "styled-components";
import { useState, useCallback, useEffect } from "react";
import { GlobalStyles } from "../../global.styles";
import { SwitchThemeContext } from "./SwitchThemeContext";
import darkTheme from "../../themes/dark";
import lightTheme from "../../themes/light";

type PropsSwitchThemeProvider = {
  children: JSX.Element;
};

export function SwitchThemeProvider({
  children,
}: PropsSwitchThemeProvider): JSX.Element {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const localTheme = localStorage.getItem("themeDefault");
    setIsDarkTheme(localTheme === "true");
  }, []);

  const toggleTheme = useCallback(() => {
    setIsDarkTheme((prevIsDarkTheme) => {
      const newIsDarkTheme = !prevIsDarkTheme;
      localStorage.setItem("themeDefault", newIsDarkTheme.toString());
      return newIsDarkTheme;
    });
  }, []);

  const theme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <SwitchThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </SwitchThemeContext.Provider>
  );
}
