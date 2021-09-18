import React from "react";
import { Column, ColumnConfig, G2 } from "@ant-design/charts";

const registerTheme = G2.registerTheme;
registerTheme("custom-theme", {
  colors10: ["rgba(199, 21, 140, 0.6)", "#90278e"],
  colors20: ["rgba(199, 21, 140, 0.6)", "#90278e"],
});

type ColumnChartProps = {
  className?: string;
};

function ColumnChart({ className }: ColumnChartProps) {
  let data = [
    {
      date: "01/09/2020",
      value: 38,
    },
    {
      date: "08/09/2020",
      value: 52,
    },
    {
      date: "15/09/2020",
      value: 61,
    },
    {
      date: "22/09/2020",
      value: 145,
    },
    {
      date: "29/09/2020",
      value: 48,
    },
    {
      date: "06/10/2020",
      value: 77,
    },
    {
      date: "13/10/2020",
      value: 122,
    },
    {
      date: "20/10/2020",
      value: 10,
    },
  ];

  let config: ColumnConfig = {
    data: data,
    xField: "date",
    yField: "value",
    yAxis: {
      nice: true,
      grid: { line: { style: { stroke: "#e1e1e1" } } },
      line: { style: { stroke: "#C7158C", lineWidth: 1.5 } },
      label: { style: { fill: "#111" } },
    },
    xAxis: {
      nice: true,
      grid: { line: { style: { stroke: "#fff" } } },
      line: { style: { stroke: "#C7158C", lineWidth: 1.5 } },
      label: { style: { fill: "#111" } },
    },
    columnStyle: { fill: "#8E278C" },
    meta: {
      date: { alias: "date" },
      value: { alias: "Sessions" },
    },
    theme: "custom-theme",
  };

  // @ts-ignore
  return <Column className={className} {...config} />;
}

export default ColumnChart;
