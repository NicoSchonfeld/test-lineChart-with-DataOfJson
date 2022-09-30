import React, { useState } from "react";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

import { Formula_Abonado } from "../db/db.json";

const { Utilidad, Rentabilidad, Rendimiento } = Formula_Abonado;

let [methodB] = Rendimiento.slice(-1);

const LineChart = () => {
  const [valueRange, setValueRange] = useState(methodB);

  const inputChange = (e) => {
    // console.log(e.target.value);
    const { value } = e.target;
    setValueRange(value);
  };

  const labels = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: Utilidad,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },

      {
        label: "Dataset 2",
        data: Rentabilidad,
        borderColor: "rgb(31, 12, 143)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "'top' as const",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };

  return (
    <div className="p-40">
      <Line options={options} data={data} />

      <p>Rendimiento: {methodB}</p>

      <input
        className="w-100"
        type="range"
        value={valueRange}
        onInput={(e) => inputChange(e)}
      />

      <h1>Valor: {valueRange}</h1>
    </div>
  );
};

export default LineChart;
