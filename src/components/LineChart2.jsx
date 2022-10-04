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

// ** Importamos BD
import { Formula_Abonado } from "../db/db.json";

// ** Hacemos destructuración de la BD
const { Rendimiento, Utilidad, Rentabilidad } = Formula_Abonado;

console.log(Rendimiento);

console.log(`Valor: ${Math.max(...Rendimiento)}`);

// ** Ultimo numero
let [rendimientoFinal] = Rendimiento.slice(-1);
let [utilidadFinal] = Utilidad.slice(-1);
let [rentabilidadFinal] = Rentabilidad.slice(-1);

// ** Calculamos el total de valores que tienen los arrays
const rendimientoLength = Rendimiento.length;
const utilidadLength = Utilidad.length;
const rentabilidadLength = Rentabilidad.length;

// const [, setUtilidad_norm] = useState([]);
// const [, setRentabilidad_norm] = useState([]);

let rentabilidad_norm = [];
let utilidad_norm = [];

let maxUtil = Math.max(...Utilidad);
let maxRent = Math.max(...Rentabilidad);

for (let i = 0; i < utilidadLength; i++) {
  rentabilidad_norm.push(Rentabilidad[i] / maxRent);
  utilidad_norm.push(Utilidad[i] / maxUtil);
}

// console.log("nuevo valor: " + Utilidad + " ... " + Rentabilidad);

// console.log(rendimientoLength, utilidadLength, rentabilidadLength);

const LineChart2 = () => {
  // ** Creamos un estado para guardar el valor del input Range
  const [valueInput, setValueInput] = useState(null);

  // ** Creamos una funcion para guardar en el estado el valor del input range
  const handleChangeRange = (e) => {
    const { value } = e.target;
    setValueInput(value);
  };

  // ** Creamos una varable con un array vacio
  let labels = [];

  // ** Guardamos en el array vacio la cantidad de valores del array de rendimiento
  for (let i = 0; i < rendimientoLength; i++) {
    labels.push(i);
  }

  // elemento del vector maximo de ese vector
  // dividir el minimo valor del vector por el maximo

  // let minNum = Rendimiento[0].toFixed(2);
  // let maxNum = rendimientoFinal;

  // console.log(`Primer numero ${minNum} + Ultimo numero ${maxNum}`);
  // console.log(`El resultado es: ${minNum / maxNum}`);

  // ** declaramos la data del grafico
  const data = {
    labels,
    datasets: [
      {
        label: "Utilidad",
        data: utilidad_norm,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },

      {
        label: "Rentabilidad",
        data: rentabilidad_norm,
        borderColor: "rgb(31, 12, 143)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  // ** añadimos opciones al grafico
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "'top' as const",
      },
    },
  };

  return (
    <>
      <div className="p-40">
        {/* Importamos el componente del grafico y le pasamos por props la data y las opciones */}
        <Line options={options} data={data} width={400} height={200} />
        <br />

        {/* Creamos un input de typo range y le indicamos que su valor minimo es 0 y su valor maximo es el total del array de rendimiento - 1; Y le añadimos la funcion handleRange para guardar el valor del input */}
        <input
          className="w-100"
          type="range"
          min={0}
          max={rendimientoLength - 1}
          defaultValue={rendimientoLength}
          onInput={(e) => handleChangeRange(e)}
        />
      </div>

      <div className="p">
        {/* Le mostramos valores al usuario segun una condicion; SI el valor del input es nulo, mostrale el utlimo valor del array de lo contrario hace un map del array y compara el index con el valor del input, si son iguales mostrame un span con el elemento, de lo contrario no me mostres nada */}
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
          {/* Le mostramos valores al usuario segun una condicion; SI el valor del input es nulo, mostrale el utlimo valor del array de lo contrario hace un map del array y compara el index con el valor del input, si son iguales mostrame un span con el elemento, de lo contrario no me mostres nada */}
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
          {/* Le mostramos valores al usuario segun una condicion; SI el valor del input es nulo, mostrale el utlimo valor del array de lo contrario hace un map del array y compara el index con el valor del input, si son iguales mostrame un span con el elemento, de lo contrario no me mostres nada */}
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
