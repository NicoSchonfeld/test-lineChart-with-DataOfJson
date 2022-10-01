import React, { useState, useEffect } from "react";

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

const { Rendimiento, Utilidad, Rentabilidad } = Formula_Abonado;

let [rendimientoFinal] = Rendimiento.slice(-1);
let [utilidadFinal] = Utilidad.slice(-1);
let [rentabilidadFinal] = Rentabilidad.slice(-1);

const rendimientoLength = Rendimiento.length;
const utilidadLength = Utilidad.length;
const rentabilidadLength = Rentabilidad.length;

console.log(rendimientoLength, utilidadLength, rentabilidadLength);

const LineChart2 = () => {
  const [valueInput, setValueInput] = useState(null);

  const handleChangeRange = (e) => {
    const { value } = e.target;
    setValueInput(value);
  };

  let labels = [];

  for (let i = 0; i < rendimientoLength; i++) {
    labels.push(i);
  }

  // elemento del vector maximo de ese vector
  // dividir el minimo valor del vector por el maximo

  // let minNum = Rendimiento[0].toFixed(2);
  // let maxNum = rendimientoFinal;

  // console.log(`Primer numero ${minNum} + Ultimo numero ${maxNum}`);
  // console.log(`El resultado es: ${minNum / maxNum}`);

  const data = {
    labels,
    datasets: [
      {
        label: "Utilidad",
        data: Utilidad,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },

      {
        label: "Rentabilidad",
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
    <>
      <div className="p-40">
        <Line options={options} data={data} width={400} height={200} />
        <br />

        <input
          className="w-100"
          type="range"
          min={0}
          max={rendimientoLength - 1}
          defaultValue={rendimientoLength}
          onInput={(e) => handleChangeRange(e)}
        />
      </div>

      {/* viewResult(valueInput) */}

      <div className="p">
        <h3>
          Rendimiento:{" "}
          {valueInput == null ? (
            rendimientoFinal
          ) : (
            <>
              {Rendimiento.map((el, index) =>
                index == valueInput ? (
                  <span key={index}>{el.toFixed(2)}</span>
                ) : null
              )}
            </>
          )}{" "}
          kg/ha
        </h3>

        <br />

        <h3 style={{ color: "rgb(255, 99, 132)" }}>
          Utilidad:{" "}
          {valueInput == null ? (
            utilidadFinal.toFixed(2)
          ) : (
            <>
              {Utilidad.map((el, index) =>
                index == valueInput ? (
                  <span key={index}>{el.toFixed(2)}</span>
                ) : null
              )}
            </>
          )}{" "}
          u$s/ha
        </h3>

        <br />

        <h3 style={{ color: "rgb(31, 12, 143)" }}>
          Rentabilidad:{" "}
          {valueInput == null ? (
            rentabilidadFinal.toFixed(2)
          ) : (
            <>
              {Rentabilidad.map((el, index) =>
                index == valueInput ? (
                  <span key={index}>{el.toFixed(2)}</span>
                ) : null
              )}
            </>
          )}{" "}
          (Utilidad u$s/Inversión u$s)
        </h3>
      </div>
    </>
  );
};

export default LineChart2;
