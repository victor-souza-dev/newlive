import Chart, { ChartData } from "chart.js/auto";
import { languageColors } from "../../utils/languageColors";
import { options } from "./optionsGraphic";
import { useState, useEffect, useMemo } from "react";
import { Line } from "react-chartjs-2";
import { StyledContainerLineGraphic } from "./ContainerLineGraphic.style";
import { useTheme } from "../../Hooks/useTheme";
import { weaksList } from "../../utils/weaksList";

export function LineGraphic({ data = [] }) {
  const [chart, setChart] = useState<Chart>();
  const [chartData, setChartData] = useState<ChartData>();
  const theme = useTheme();

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
      setChartData({
        labels: weaksList(),
        datasets: data?.map((value) => {
          return {
            label: value?.label,
            data: value?.data,
            borderColor: languageColors(value?.label),
            backgroundColor: languageColors(value?.label),
          };
        }),
      });
    }
  }, [data]);

  return (
    <StyledContainerLineGraphic>
      <Line options={options(theme)} data={chartData} />
    </StyledContainerLineGraphic>
  );
}
