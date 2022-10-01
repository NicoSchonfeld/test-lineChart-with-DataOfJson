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

const { Rendimiento, Utilidad, Rentabilidad } = Formula_Abonado;

let [rendimientoFinal] = Rendimiento.slice(-1);
let [utilidadFinal] = Utilidad.slice(-1);
let [rentabilidadFinal] = Rentabilidad.slice(-1);

const rendimientoLength = Rendimiento.length;
const utilidadLength = Utilidad.length;
const rentabilidadLength = Rentabilidad.length;

// console.log(rendimientoLength, utilidadLength, rentabilidadLength);

const LineChart2 = () => {
  const [valueInput, setValueInput] = useState(null);

  const handleChangeRange = (e) => {
    const { value } = e.target;
    // console.log(value == 0 ? "hola" : null);
    setValueInput(value);
  };

  // const viewResult = (dato) => {
  //   Rendimiento.map((el, index) =>
  //     index == dato ? <span>{el}</span> : "no funca"
  //   );

  //   // if (dato == 0) return <span>{Rendimiento[0].toFixed(2)}</span>;

  //   // if (dato == 1) return <span>{Rendimiento[1].toFixed(2)}</span>;

  //   // if (dato == 2) return <span>{Rendimiento[2].toFixed(2)}</span>;

  //   // if (dato == 3) return <span>{Rendimiento[3].toFixed(2)}</span>;

  //   // if (dato == 4) return <span>{Rendimiento[4].toFixed(2)}</span>;

  //   // if (dato == 5) return <span>{Rendimiento[5].toFixed(2)}</span>;

  //   // if (dato == 6) return <span>{Rendimiento[6].toFixed(2)}</span>;

  //   // if (dato == 7) return <span>{Rendimiento[7].toFixed(2)}</span>;

  //   // if (dato == 8) return <span>{Rendimiento[8].toFixed(2)}</span>;

  //   // if (dato == 9) return <span>{Rendimiento[9].toFixed(2)}</span>;

  //   // if (dato == 10) return <span>{Rendimiento[10].toFixed(2)}</span>;

  //   // if (dato == 11) return <span>{Rendimiento[11].toFixed(2)}</span>;

  //   // if (dato == 12) return <span>{Rendimiento[12].toFixed(2)}</span>;

  //   // if (dato == 13) return <span>{Rendimiento[13].toFixed(2)}</span>;

  //   // if (dato == 14) return <span>{Rendimiento[14].toFixed(2)}</span>;

  //   // if (dato == 15) return <span>{Rendimiento[15].toFixed(2)}</span>;

  //   // if (dato == 16) return <span>{Rendimiento[16].toFixed(2)}</span>;

  //   // if (dato == 17) return <span>{Rendimiento[17].toFixed(2)}</span>;

  //   // if (dato == 18) return <span>{Rendimiento[18].toFixed(2)}</span>;

  //   // if (dato == 19) return <span>{Rendimiento[19].toFixed(2)}</span>;

  //   // if (dato == 20) return <span>{Rendimiento[20].toFixed(2)}</span>;

  //   // if (dato == 21) return <span>{Rendimiento[21].toFixed(2)}</span>;

  //   // if (dato == 22) return <span>{Rendimiento[22].toFixed(2)}</span>;

  //   // if (dato == 23) return <span>{Rendimiento[23].toFixed(2)}</span>;

  //   // if (dato == 24) return <span>{Rendimiento[24].toFixed(2)}</span>;

  //   // if (dato == null) return <span>{Rendimiento[24].toFixed(2)}</span>;
  // };

  // const viewUtilidad = (dato) => {
  //   if (dato == 0) return <span>{Utilidad[0].toFixed(2)}</span>;

  //   if (dato == 1) return <span>{Utilidad[1].toFixed(2)}</span>;

  //   if (dato == 2) return <span>{Utilidad[2].toFixed(2)}</span>;

  //   if (dato == 3) return <span>{Utilidad[3].toFixed(2)}</span>;

  //   if (dato == 4) return <span>{Utilidad[4].toFixed(2)}</span>;

  //   if (dato == 5) return <span>{Utilidad[5].toFixed(2)}</span>;

  //   if (dato == 6) return <span>{Utilidad[6].toFixed(2)}</span>;

  //   if (dato == 7) return <span>{Utilidad[7].toFixed(2)}</span>;

  //   if (dato == 8) return <span>{Utilidad[8].toFixed(2)}</span>;

  //   if (dato == 9) return <span>{Utilidad[9].toFixed(2)}</span>;

  //   if (dato == 10) return <span>{Utilidad[10].toFixed(2)}</span>;

  //   if (dato == 11) return <span>{Utilidad[11].toFixed(2)}</span>;

  //   if (dato == 12) return <span>{Utilidad[12].toFixed(2)}</span>;

  //   if (dato == 13) return <span>{Utilidad[13].toFixed(2)}</span>;

  //   if (dato == 14) return <span>{Utilidad[14].toFixed(2)}</span>;

  //   if (dato == 15) return <span>{Utilidad[15].toFixed(2)}</span>;

  //   if (dato == 16) return <span>{Utilidad[16].toFixed(2)}</span>;

  //   if (dato == 17) return <span>{Utilidad[17].toFixed(2)}</span>;

  //   if (dato == 18) return <span>{Utilidad[18].toFixed(2)}</span>;

  //   if (dato == 19) return <span>{Utilidad[19].toFixed(2)}</span>;

  //   if (dato == 20) return <span>{Utilidad[20].toFixed(2)}</span>;

  //   if (dato == 21) return <span>{Utilidad[21].toFixed(2)}</span>;

  //   if (dato == 22) return <span>{Utilidad[22].toFixed(2)}</span>;

  //   if (dato == 23) return <span>{Utilidad[23].toFixed(2)}</span>;

  //   if (dato == 24) return <span>{Utilidad[24].toFixed(2)}</span>;

  //   if (dato == null) return <span>{Utilidad[24].toFixed(2)}</span>;
  // };

  // const viewRentabilidad = (dato) => {
  //   if (dato == 0) return <span>{Rentabilidad[0].toFixed(2)}</span>;

  //   if (dato == 1) return <span>{Rentabilidad[1].toFixed(2)}</span>;

  //   if (dato == 2) return <span>{Rentabilidad[2].toFixed(2)}</span>;

  //   if (dato == 3) return <span>{Rentabilidad[3].toFixed(2)}</span>;

  //   if (dato == 4) return <span>{Rentabilidad[4].toFixed(2)}</span>;

  //   if (dato == 5) return <span>{Rentabilidad[5].toFixed(2)}</span>;

  //   if (dato == 6) return <span>{Rentabilidad[6].toFixed(2)}</span>;

  //   if (dato == 7) return <span>{Rentabilidad[7].toFixed(2)}</span>;

  //   if (dato == 8) return <span>{Rentabilidad[8].toFixed(2)}</span>;

  //   if (dato == 9) return <span>{Rentabilidad[9].toFixed(2)}</span>;

  //   if (dato == 10) return <span>{Rentabilidad[10].toFixed(2)}</span>;

  //   if (dato == 11) return <span>{Rentabilidad[11].toFixed(2)}</span>;

  //   if (dato == 12) return <span>{Rentabilidad[12].toFixed(2)}</span>;

  //   if (dato == 13) return <span>{Rentabilidad[13].toFixed(2)}</span>;

  //   if (dato == 14) return <span>{Rentabilidad[14].toFixed(2)}</span>;

  //   if (dato == 15) return <span>{Rentabilidad[15].toFixed(2)}</span>;

  //   if (dato == 16) return <span>{Rentabilidad[16].toFixed(2)}</span>;

  //   if (dato == 17) return <span>{Rentabilidad[17].toFixed(2)}</span>;

  //   if (dato == 18) return <span>{Rentabilidad[18].toFixed(2)}</span>;

  //   if (dato == 19) return <span>{Rentabilidad[19].toFixed(2)}</span>;

  //   if (dato == 20) return <span>{Rentabilidad[20].toFixed(2)}</span>;

  //   if (dato == 21) return <span>{Rentabilidad[21].toFixed(2)}</span>;

  //   if (dato == 22) return <span>{Rentabilidad[22].toFixed(2)}</span>;

  //   if (dato == 23) return <span>{Rentabilidad[23].toFixed(2)}</span>;

  //   if (dato == 24) return <span>{Rentabilidad[24].toFixed(2)}</span>;

  //   if (dato == null) return <span>{Rentabilidad[24].toFixed(2)}</span>;
  // };

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
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ];

  // elemento del vector maximo de ese vector
  // dividir el minimo valor del vector por el maximo

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
