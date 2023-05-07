import { DefaultTheme } from "styled-components";

export function optionsGraphicDought(theme: DefaultTheme) {
  const chartOptionsDought = {
    plugins: {
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
    responsive: false,
  };
  return chartOptionsDought;
}
