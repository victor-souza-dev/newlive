import Chart, { ChartData } from "chart.js/auto";
import { languageColors } from "../../utils/languageColors";
import { options } from "./optionsGraphic";
import { useState, useEffect, useMemo } from "react";
import { Line } from "react-chartjs-2";
import { StyledContainerLineGraphic } from "./ContainerLineGraphic.style";
import { useTheme } from "../../Hooks/useTheme";
import { weaksList } from "../../utils/weaksList";
import getTotalVendas from "../../api/GetTotalVendas";

export function LineGraphic({ data = {} }) {
  const [chart, setChart] = useState<Chart>();
  const [chartData, setChartData] = useState<ChartData>();
  const theme = useTheme();
  const [quantidade, setQuantidade] = useState([]);
  const [valor, setValor] = useState([]);
  
  useEffect(() => {
    getTotalVendas().then((response: any) => {
      const data = response.data.data;
      data.forEach((item: any) => {
        setValor((prevValor) => [...prevValor, item.valor]);
        setQuantidade((prevQuantidade) => [...prevQuantidade, item.quantidade]);
      });
    });
  }, []);

  useEffect(() => {
    const canvas = document.getElementById("myChart") as HTMLCanvasElement;
    const contexto = canvas?.getContext("2d");

    if (!contexto) return;
    const newChart = new Chart(contexto, {
      type: "Line",
      data: chartData as ChartData,
    });
    setChart(newChart);

    return () => {
      newChart.destroy();
    };
  }, [chartData]);

  useMemo(() => {
    if (data) {
      const data1 = quantidade.slice(0,12)
      const data2 = quantidade.slice(12,17)
      console.log(data1)
      console.log(data2)
      setChartData({
        labels: weaksList(),
        datasets: [
          {
            label: '2022',
            data: data1,
            borderColor: languageColors(weaksList()[0]),
            backgroundColor: languageColors(weaksList()[0]),
          },
          {
            label: '2023',
            data: data2,
            borderColor: languageColors(weaksList()[1]),
            backgroundColor: languageColors(weaksList()[1]),
          },
        ],
      });
    }
  }, [quantidade]);

  return (
    <StyledContainerLineGraphic>
      <Line options={options(theme)} data={chartData} />
    </StyledContainerLineGraphic>
  );
}
