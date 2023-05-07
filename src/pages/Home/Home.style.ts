import styled from "styled-components";
import Paper from "@mui/material/Paper";

export const StyledHome = styled("div")(() => ({
  marginLeft: "70px",
  display: "flex",
  justifyContent: "center",
}));

export const StyledPaperGraphicPrimary = styled(Paper)(({ theme }) => ({
  width: "70vw",
  padding: "20px",
  borderTop: `4px solid ${theme.colors.border} !important`,
  backgroundColor: `${theme.colors.backgroundColor} !important`,
  marginTop: "40px",
  borderTopLeftRadius: "10px",
  borderTopRightRadius: "10px",
  borderColor: `${theme.colors.border} !important`,
}));
