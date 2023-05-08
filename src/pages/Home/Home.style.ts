import styled from "styled-components";
import Paper from "@mui/material/Paper";

export const StyledHome = styled("div")(() => ({
  marginLeft: "70px",
  paddingBottom: "20px",
  display: "flex",
  minHeight: "600px",
  flexDirection: "column",
  alignItems: "center",
}));

export const StyledPaperGraphicPrimary = styled(Paper)(({ theme }) => ({
  width: "70.8vw",
  padding: "20px",
  borderTop: `4px solid ${theme.colors.border} !important`,
  backgroundColor: `${theme.colors.backgroundColor} !important`,
  borderTopLeftRadius: "10px",
  borderTopRightRadius: "10px",
  borderColor: `${theme.colors.border} !important`,
}));

export const StyledMainDashboard = styled("main")(() => ({
  marginTop: "40px !important",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "0 105px !important",
}));

export const StyledSectionGraphicsSecondary = styled("section")(() => ({
  width: "100%",
  display: "flex",
  height: "250px",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
}));

export const StyledPaperGraphicGeneric = styled(Paper)(
  ({ theme, w = "auto", h = "auto" }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: w,
    height: h,
    padding: "20px",
    borderTop: `4px solid ${theme.colors.border} !important`,
    backgroundColor: `${theme.colors.backgroundColor} !important`,
    marginTop: "40px",
    borderTopLeftRadius: "10px",
    borderColor: `${theme.colors.border} !important`,
    borderTopRightRadius: "10px",
  })
);
