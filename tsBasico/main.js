"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_js_1 = require("./data.js");
let seriesTbody = document.getElementById('series');
const PromTempsElm = document.getElementById("prom-temps");
renderSeriesInTable(data_js_1.series);
PromTempsElm.innerHTML = `${getPromTemps(data_js_1.series)}`;
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(s => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${s.id}</td>
                           <td>${s.title}</td>
                           <td>${s.channel}</td>
                           <td>${s.seasons}</td>`;
        seriesTbody.appendChild(trElement);
    });
}
function getPromTemps(series) {
    let total = 0;
    series.forEach((series) => total = total + series.seasons);
    let promTemps = total / series.length;
    return promTemps;
}
