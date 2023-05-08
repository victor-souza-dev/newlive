import { LineGraphic } from "../../Components/LineGraphic/LineGraphic";
import {
  StyledHome,
  StyledMainDashboard,
  StyledPaperGraphicGeneric,
  StyledPaperGraphicPrimary,
  StyledSectionGraphicsSecondary,
} from "./Home.style";
import { BarHorizontal } from "../../Components/BarHorizontalGrafic/BarHorizontalGrafic";
import { useState, useEffect } from "react";
import getTotalVendas from "../../api/GetTotalVendas";
import { Doug } from "../../Components/DoughtGrafic/DoughtGrafic";
import { AirlineSeatIndividualSuiteRounded } from "@mui/icons-material";

export function Home() {


  return (
    <StyledHome>
      <StyledMainDashboard>
        <StyledPaperGraphicPrimary variant="outlined" square>
          <LineGraphic data={{ janeiro: 15, fevereiro: 22 }} />
        </StyledPaperGraphicPrimary>
        <StyledSectionGraphicsSecondary>
          <StyledPaperGraphicGeneric variant="outlined" square w={"45%"}>
            <Doug></Doug>
          </StyledPaperGraphicGeneric>
          <StyledPaperGraphicGeneric variant="outlined" square w={"40%"}>
            <BarHorizontal title="Faturamento"></BarHorizontal>
          </StyledPaperGraphicGeneric>
        </StyledSectionGraphicsSecondary>
      </StyledMainDashboard>
    </StyledHome>
  );
}
