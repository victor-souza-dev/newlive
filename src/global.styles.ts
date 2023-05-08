import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle(({ theme }) => ({
  "& *": {
    margin: "0",
    padding: "0",
    border: "0",
  },
  "& body": {
    height: "100vh",
    overflowY: "hidden",
    backgroundColor: theme.colors.backgroundColor,
  },
  "@media (max-width: 659px)": {
    "& body": {
      overflowY: "auto",
    },
  },
}));
