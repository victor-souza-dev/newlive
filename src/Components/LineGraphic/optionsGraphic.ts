import { ChartOptions } from "chart.js";
import { DefaultTheme } from "styled-components";

export function options(theme: DefaultTheme) {
  const options: ChartOptions<"line"> = {
    plugins: {
      title: {
        display: true,
        text: 'Tendência',
        color: `${theme.colors.textColor}`,
      },
      legend: {
        position: "right" as const,
        align: "center" as const,
        labels: {
          boxWidth: 15,
          padding: 25,
          color: `${theme.colors.textColor}`,
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: `${theme.colors.border}`,
        },
        ticks: {
          color: `${theme.colors.textColor}`,
        },
      },
      y: {
        grid: {
          color: `${theme.colors.border}`,
        },
        ticks: {
          color: `${theme.colors.textColor}`,
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };
  return options;
}
