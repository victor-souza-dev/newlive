import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { optionsGraphicBarHorizontal } from "./options";
import { useTheme } from "../../Hooks/useTheme";
import { weaksList } from "../../utils/weaksList";
import { StyledBarContainer } from "./BarcContainer.styles";
import { useState,useEffect } from "react";
import getTotalVendas from "../../api/GetTotalVendas";

type BarHorizontalProps = {
  title: string;
  dt: Array<any>;
};

export function BarHorizontal({ title = "", dt = [] }: BarHorizontalProps) {
  const theme = useTheme();
  const [valor, setValor] = useState([]);
  
  useEffect(() => {
    getTotalVendas().then((response: any) => {
      const data = response.data.data;
      data.forEach((item: any) => {
        setValor((prevValor) => [...prevValor, item.valor]);
      });
    });
  }, []);

  const data = {
    labels: weaksList(),
    datasets: [
      {
        label: "Receita",
        data: valor.slice(12,17),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <StyledBarContainer>
      <Bar
        options={optionsGraphicBarHorizontal({ theme, title })}
        data={data}
      />
    </StyledBarContainer>
  );
}
