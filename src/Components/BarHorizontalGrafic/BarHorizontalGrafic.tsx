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

type BarHorizontalProps = {
  title: string;
  dt: Array<any>;
};

export function BarHorizontal({ title = "", dt = [] }: BarHorizontalProps) {
  const theme = useTheme();

  const data = {
    labels: weaksList(),
    datasets: [
      {
        label: "Vendas",
        data: [12, 19, 3, 5, 2, 0, 19, 3, 5, 2, 12, 19, 3, 5, 2],
        borderColor: "rgb(0, 255, 30)",
        backgroundColor: "rgb(0, 255, 30)",
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
