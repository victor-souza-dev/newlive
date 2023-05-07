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
import { getTotalVendas } from "../../api/GetTotalVendas";
import { Doug } from "../../Components/DoughtGrafic/DoughtGrafic";

export function Home() {
  // const [totalVendas, setTotalVendas] = useState({});

  // useEffect(() => {
  //   getTotalVendas({
  //     ano: 2023,
  //     mes: 5,
  //     day: 6,
  //     daylimit: 6,
  //   }).then((response: any) => setTotalVendas(response));
  // }, []);

  // console.log(totalVendas);

  return (
    <StyledHome>
      <StyledMainDashboard>
        <StyledPaperGraphicPrimary variant="outlined" square>
          <LineGraphic data={{ janeiro: 15, fevereiro: 22 }} />
        </StyledPaperGraphicPrimary>
        <StyledSectionGraphicsSecondary>
          <StyledPaperGraphicGeneric variant="outlined" square w={"50%"}>
            <Doug></Doug>
          </StyledPaperGraphicGeneric>
          <StyledPaperGraphicGeneric variant="outlined" square>
            <BarHorizontal></BarHorizontal>
          </StyledPaperGraphicGeneric>
        </StyledSectionGraphicsSecondary>
      </StyledMainDashboard>
    </StyledHome>
  );
}
