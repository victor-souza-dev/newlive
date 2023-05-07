import { LineGraphic } from "../../Components/LineGraphic/LineGraphic";
import { StyledHome, StyledPaperGraphicPrimary } from "./Home.style";
import { useState, useEffect } from "react";
import { getTotalVendas } from "../../api/GetTotalVendas";

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
      <StyledPaperGraphicPrimary variant="outlined" square>
        <LineGraphic data={{ janeiro: 15, fevereiro: 22 }} />
      </StyledPaperGraphicPrimary>
    </StyledHome>
  );
}
