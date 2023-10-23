import { seriesInfo } from './data.js';

var serieTbody = document.getElementById('serie');
var PromTempsElm = document.getElementById("prom-temps");

renderSeriesInTable(seriesInfo);

PromTempsElm.innerHTML = "".concat(getPromTemps(seriesInfo));

function renderSeriesInTable(serie) {
    console.log('Desplegando serie');
    serie.forEach(function (s) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(s.id, "</td>\n                           <td>").concat(s.title, "</td>\n                           <td>").concat(s.channel, "</td>\n                           <td>").concat(s.seasons, "</td>");
        serieTbody.appendChild(trElement);
    });
}

function getPromTemps(serie) {
    var total = 0;
    serie.forEach(function (serie) { return total = total + serie.seasons; });
    var promTemps = total / serie.length;
    return promTemps;
}