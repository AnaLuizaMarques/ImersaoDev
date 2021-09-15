let reaisParaDolar = document.getElementById("valor");
let reaisParaEuro = document.getElementById("valor");
let reaisParaBitcoin = document.getElementById("valor");
let reaisParaLibras = document.getElementById("valor");

function converterDolar() {
  let valor = Number(reaisParaDolar.value);
  let calculoConversor = (valor / 5.24).toFixed(2);
  resposta.innerHTML = `<p> ${valor} R$ corresponde a ${calculoConversor} $.</p>`;
}

function converterEuro() {
  let valor = Number(reaisParaEuro.value);
  let calculoConversorDois = (valor / 6.17).toFixed(2);
  resposta.innerHTML = `<p> ${valor} R$ corresponde a ${calculoConversorDois} €.</p>`;
}

function converterBitcoin() {
  let valor = Number(reaisParaBitcoin.value);
  let calculoConversorTres = (valor / 244.959).toFixed(1);
  resposta.innerHTML = `<p> ${valor} R$ corresponde a ${calculoConversorTres} ฿.</p>`;
}

function converterLibras() {
  let valor = Number(reaisParaLibras.value);
  let calculoConversorQuatro = (valor / 7.23).toFixed(1);
  resposta.innerHTML = `<p> ${valor} R$ corresponde a ${calculoConversorQuatro} £.</p>`;
}
