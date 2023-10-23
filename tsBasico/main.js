"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_js_1 = require("./data.js");
let seriesTbody = document.getElementById('series');
const avgSeasonsElm = document.getElementById("avg-seasons");
renderSeriesInTable(data_js_1.dataSeries);
avgSeasonsElm.innerHTML = `${getAvgSeasons(data_js_1.dataSeries)}`;
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(s => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${s.id}</td>
                           <td>${s.name}</td>
                           <td>${s.channel}</td>
                           <td>${s.seasons}</td>`;
        seriesTbody.appendChild(trElement);
    });
}
function getAvgSeasons(series) {
    let totalSeasons = 0;
    series.forEach((series) => totalSeasons = totalSeasons + series.seasons);
    let seasonsAvg = totalSeasons / series.length;
    return seasonsAvg;
}
