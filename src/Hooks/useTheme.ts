import { SwitchThemeContext } from "../Context/SwitchContext/SwitchThemeContext";
import { useContext } from "react";
import darkTheme from "../themes/dark";
import lightTheme from "../themes/light";

export function useTheme() {
  const { isDarkTheme } = useContext(SwitchThemeContext);

  if (isDarkTheme) {
    return darkTheme;
  } else {
    return lightTheme;
  }
}
