import React from "react";
import { Column, ColumnConfig, G2 } from "@ant-design/charts";

const registerTheme = G2.registerTheme;
registerTheme("custom-theme", {
  colors10: ["rgba(199, 21, 140, 0.6)", "#90278e"],
  colors20: ["rgba(199, 21, 140, 0.6)", "#90278e"],
});

const data = [
  {
    year: "2014",
    value: 8,
    type: "Wines Saved",
  },
  {
    year: "2015",
    value: 22,
    type: "Wines Saved",
  },
  {
    year: "2016",
    value: 8.5,
    type: "Wines Saved",
  },
  {
    year: "2017",
    value: 5,
    type: "Wines Saved",
  },
  {
    year: "2018",
    value: 4.9,
    type: "Wines Saved",
  },
  {
    year: "2019",
    value: 8.5,
    type: "Wines Saved",
  },
  {
    year: "2020",
    value: 5,
    type: "Wines Saved",
  },
  {
    year: "2021",
    value: 5,
    type: "Wines Saved",
  },

  {
    year: "2014",
    value: 3,
    type: "Wines Shared",
  },
  {
    year: "2015",
    value: 4,
    type: "Wines Shared",
  },
  {
    year: "2016",
    value: 13.5,
    type: "Wines Shared",
  },
  {
    year: "2017",
    value: 8,
    type: "Wines Shared",
  },
  {
    year: "2018",
    value: 14,
    type: "Wines Shared",
  },
  {
    year: "2019",
    value: 3,
    type: "Wines Shared",
  },
  {
    year: "2020",
    value: 4,
    type: "Wines Shared",
  },
  {
    year: "2021",
    value: 3,
    type: "Wines Shared",
  },
];

function StackedChart() {
  let config: ColumnConfig = {
    data: data,
    xField: "year",
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
    meta: {
      date: { alias: "date" },
      value: { alias: "Sessions" },
    },

    isStack: true,
    seriesField: "type",
    legend: {
      layout: "horizontal",
      position: "top-right",
    },
    theme: "custom-theme",
  };
  return <Column {...config} />;
}

export default StackedChart;
