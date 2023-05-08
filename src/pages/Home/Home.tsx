import { LineGraphic } from "../../Components/LineGraphic/LineGraphic";
import {
  StyledHome,
  StyledMainDashboard,
  StyledPaperGraphicGeneric,
  StyledPaperGraphicPrimary,
  StyledSectionGraphicsSecondary,
} from "./Home.style";
import { BarHorizontal } from "../../Components/BarHorizontalGrafic/BarHorizontalGrafic";
import { Doug } from "../../Components/DoughtGrafic/DoughtGrafic";
import { useValoresPorAno } from "../../api/useValoresPorAno";

export function Home() {
  const data = useValoresPorAno();

  return (
    <StyledHome>
      <StyledMainDashboard>
        <StyledPaperGraphicPrimary variant="outlined" square>
          <LineGraphic data={data} />
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
