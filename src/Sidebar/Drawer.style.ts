import { Drawer } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import styled from "styled-components";

export const DrawerStyle = styled(Drawer)(({ theme, width }) => ({
  "& .MuiDrawer-paper": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    overflow: "hidden",
    margin: "0",
    width: width === true ? "200px" : "70px",
    transition: "width 0.5s",
    paddingTop: "10px",
    backgroundColor: theme.colors.backgroundColor,
  },
}));

export const ContainerIconOpenSidebar = styled("div")(
  ({ width }: { width: boolean }) => ({
    width: "100%",
    display: "flex",
    paddingLeft: width ? "290px" : "20px",
    paddingBottom: "15px",
    transition: "0.5s",
  })
);

export const IconOpenSidebar = styled(IconButton)(({ theme }) => ({
  marginRight: "0 !important",
  marginLeft: "0 !important",
  "&.MuiIconButton-root": {
    color: theme.colors.textColor,
  },
}));

export const IconListSidebar = styled("div")(({ theme }) => ({
  marginRight: "0 !important",
  marginLeft: "0 !important",
  marginBottom: "10px",
  color: theme.colors.textColor,
}));
