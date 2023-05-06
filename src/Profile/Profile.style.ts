import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import styled from "styled-components";

export const StyledProfile = styled(IconButton)(({ theme }) => ({
  color: `${theme.colors.textColor} !important`,
}));

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

export const StyledContainer = styled("div")(({ theme }) => ({
  marginLeft: "20px",
}));
