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
  const [quantidade, setQuantidade] = useState([]);
  const [valor, setValor] = useState([]);

  // useEffect(() => {
  //   image.png;
  //   getTotalVendas().then((response: any) => {
  //     const data = response.data.data;
  //     data.forEach((item: any) => {
  //       setValor((prevValor) => [...prevValor, item.valor]);
  //       setQuantidade((prevQuantidade) => [...prevQuantidade, item.quantidade]);
  //     });
  //   });
  // }, []);

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
            <BarHorizontal title="eai meu cupincha"></BarHorizontal>
          </StyledPaperGraphicGeneric>
        </StyledSectionGraphicsSecondary>
      </StyledMainDashboard>
    </StyledHome>
  );
}
