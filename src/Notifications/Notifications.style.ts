import Menu from "@mui/material/Menu";
import styled from "styled-components";

export const StyledMenu = styled(Menu)(({ theme }) => ({
  "& .MuiMenu-paper": {
    backgroundColor: `${theme.colors.backgroundColorWeak} !important`,
    color: `${theme.colors.textColor} !important`,
  },

  "& 	.MuiMenuItem-root": {
    width: "100px",
    display: "flex",
    justifyContent: "center",
  },
}));

export const StyledEmptyNotifications = styled("p")(({ theme }) => ({
  textAlign: "center",
  margin: "20px",
}));
