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
        data: [12, 19, 3, 5, 2, 12, 19, 3, 5, 2, 12, 19, 3, 5, 2],
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
