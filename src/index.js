import {bancos} from "./banco.js";
import {calcularPromedio} from "./calculos.js";

const contenedorBancos = document.getElementById("bancos");

bancos.forEach((banco, index) => {

    contenedorBancos.innerHTML += `
        <div class="tarjeta">
            <h2>${banco}</h2>

            <label>
                Tasa año 1 (%)
                <input type="number" id="banco${index}Anio1" min="0" step="any">
            </label>

            <label>
                Tasa año 2 (%)
                <input type="number" id="banco${index}Anio2" min="0" step="any">
            </label>

            <label>
                Tasa año 3 (%)
                <input type="number" id="banco${index}Anio3" min="0" step="any">
            </label>
        </div>
    `;

});

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const detalle = document.getElementById("detalle");
    const resultados = document.getElementById("resultados");
    const error = document.getElementById("error");

    error.textContent = "";
    detalle.innerHTML = "";

    bancos.forEach((banco, index) => {

        let tasa1 = document.getElementById(`banco${index}Anio1`).value;
        let tasa2 = document.getElementById(`banco${index}Anio2`).value;
        let tasa3 = document.getElementById(`banco${index}Anio3`).value;

        if (tasa1 === "" || tasa2 === "" || tasa3 === "") {
            error.textContent = "Completá todas las tasas de los bancos.";
            return;
        }

        tasa1 = Number(tasa1);
        tasa2 = Number(tasa2);
        tasa3 = Number(tasa3);

        if (tasa1 < 0 || tasa2 < 0 || tasa3 < 0) {
            error.textContent = "Las tasas no pueden ser negativas.";
            return;
        }

        let promedio = calcularPromedio(tasa1, tasa2, tasa3);

        detalle.innerHTML += `
            <div class="tarjeta">
                <h2>${banco}</h2>
                <p>Promedio anual: ${promedio.toFixed(2)} %</p>
            </div>
        `;

    });

    if (error.textContent !== "") {
        detalle.innerHTML = "";
        resultados.hidden = true;
    } else {
        resultados.hidden = false;
    }

});