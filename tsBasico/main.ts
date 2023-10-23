import { Serie } from './Serie.js';
import { seriesInfo } from './data.js';

let serieTbody: HTMLElement = document.getElementById('series')!;
const PromTempsElm: HTMLElement = document.getElementById("prom-temps")!;

renderSeriesInTable(seriesInfo);

PromTempsElm.innerHTML = `${getPromTemps(seriesInfo)}`

function renderSeriesInTable(series: Serie[]): void {
    console.log('Desplegando series');
    series.forEach(s => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${s.id}</td>
                           <td>${s.title}</td>
                           <td>${s.channel}</td>
                           <td>${s.seasons}</td>`;
        serieTbody.appendChild(trElement);
  });
}

function getPromTemps(serie: Serie[]): number {
  let total: number = 0;
  serie.forEach((serie) => total = total + serie.seasons);
  let promTemps: number = total / serie.length 
  return promTemps;
}
          