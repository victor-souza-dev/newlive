import { AppBar } from "@mui/material";
import styled from "styled-components";

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: `${theme.colors.backgroundColor} !important`,
  color: `${theme.colors.textColor} !important`,
  boxShadow: "none !important",
  borderBottom: `1px solid ${theme.colors.border}`,
}));

export const StyledContainerIconsAppBar = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
}));
