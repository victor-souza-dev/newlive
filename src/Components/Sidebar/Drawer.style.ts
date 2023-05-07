import { Drawer } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import styled from "styled-components";

export const DrawerStyle = styled(Drawer)(({ theme, widthsidebar }) => ({
  "& .MuiDrawer-paper": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    overflow: "hidden",
    margin: "0",
    width: widthsidebar == "true" ? "200px" : "70px",
    transition: "width 0.5s",
    backgroundColor: theme.colors.backgroundColorSidebar,
    borderColor: theme.colors.border,
  },
}));

export const ContainerIcons = styled("div")(() => ({
  width: "100%",
  overflow: "hidden",
}));

export const ContainerIconOpenSidebar = styled("div")(({ widthsidebar }) => ({
  width: "100%",
  display: "flex",
  paddingLeft: widthsidebar === "true" ? "150px" : "10px",
  paddingBottom: "15px",
  paddingTop: "10px",
  transition: "0.5s",
}));

export const IconOpenSidebar = styled(IconButton)(({ theme }) => ({
  marginRight: "0 !important",
  marginLeft: "0 !important",
  "&.MuiIconButton-root": {
    color: theme.colors.textColor,
  },
}));

export const ContainerListIcons = styled("div")(() => ({
  height: "85%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflowY: "auto",
  overflowX: "hidden",
  scrollbarWidth: "thin",
  scrollbarColor: "gray #F5F5F5",
  "&::-webkit-scrollbar": {
    width: "0px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "gray",
    borderRadius: "3px",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "#F5F5F5",
  },
  "&::-ms-overflow-style": "none",
  "scrollbar-width": "thin",
  "&::-webkit-scrollbar-corner": {
    display: "none",
  },
}));

export const EndIconSidebar = styled("div")(({ theme }) => ({
  marginRight: "0 !important",
  marginLeft: "0 !important",
  color: theme.colors.textColor,
}));

export const IconListMenu = styled(IconButton)(({ theme }) => ({
  fontSize: "14px !important",
  transition: "0.5s",
  "&.MuiIconButton-root": {
    margin: "5px 0",
    color: theme.colors.textColor,
  },
}));
