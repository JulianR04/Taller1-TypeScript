

import { Serie } from './Serie.js';
import { series } from './data.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
const PromTempsElm: HTMLElement = document.getElementById("prom-temps")!;

renderSeriesInTable(series);

PromTempsElm.innerHTML = `${getPromTemps(series)}`

function renderSeriesInTable(series: Serie[]): void {
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

function getPromTemps(series: Serie[]): number {
  let total: number = 0;
  series.forEach((series) => total = total + series.seasons);
  let promTemps: number = total / series.length 
  return promTemps;
}
          