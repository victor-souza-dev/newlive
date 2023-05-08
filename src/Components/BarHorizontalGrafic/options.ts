import { DefaultTheme } from "styled-components";

type optionsGraphicBarHorizontalProps = {
  theme: DefaultTheme;
  title: string;
};

export function optionsGraphicBarHorizontal({
  theme,
  title,
}: optionsGraphicBarHorizontalProps) {
  const options = {
    indexAxis: "y" as const,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          boxWidth: 15,
          font: {
            size: 10,
          },
          padding: 25,
          color: `${theme.colors.textColor}`,
        },
      },
      title: {
        display: true,
        text: title,
        color: `${theme.colors.textColor}`,
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
  };
  return options;
}
