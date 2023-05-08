import styled from "styled-components";
import Paper from "@mui/material/Paper";

export const StyledHome = styled("div")(() => ({
  marginLeft: "70px",
  display: "flex",
  height: "100%",
  paddingBottom: "20px",
  flexDirection: "column",
  alignItems: "center",
}));

export const StyledMainDashboard = styled("main")(() => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "0 105px !important",
  marginTop: "20px !important",
}));

export const StyledPaperGraphicPrimary = styled(Paper)(({ theme }) => ({
  width: "72.1vw",
  height: "32vh",
  padding: "20px",
  borderTop: `4px solid ${theme.colors.border} !important`,
  backgroundColor: `${theme.colors.backgroundColor} !important`,
  borderTopLeftRadius: "10px",
  borderTopRightRadius: "10px",
  borderColor: `${theme.colors.border} !important`,
}));

export const StyledSectionGraphicsSecondary = styled("section")(() => ({
  width: "100%",
  display: "flex",
  height: "150px",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
  marginBottom: "20px",
}));

export const StyledPaperGraphicGeneric = styled(Paper)(
  ({ theme, w = "auto", h = "100%" }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: w,
    height: h,
    padding: "20px",
    borderTop: `4px solid ${theme.colors.border} !important`,
    backgroundColor: `${theme.colors.backgroundColor} !important`,
    marginTop: "20px",
    borderTopLeftRadius: "10px",
    borderColor: `${theme.colors.border} !important`,
    borderTopRightRadius: "10px",
  })
);
