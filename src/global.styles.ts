import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle(({ theme }) => ({
  "& *": {
    margin: "0",
    padding: "0",
    border: "0",
  },
  "& body": {
    backgroundColor: theme.colors.backgroundColor,
  },
}));
