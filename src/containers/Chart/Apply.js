import React from "react";
import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function Apply({ chartData }) {
  return <Line data={chartData} />;
}

export default Apply;
