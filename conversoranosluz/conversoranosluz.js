let kmParaAnosLuz = document.getElementById("valor");

function converterAnosLuz() {
  let valor = Number(kmParaAnosLuz.value);
  let calculoConversor = valor / (9.46 * 10 ** 12);
  resposta.innerHTML = `<p style="color:white;   font-family: "Times New Roman", serif;"> ${valor} km corresponde a ${calculoConversor} Anos-Luz.</p>`;
}

function selecao() {
  let distanciaEstrela = document.getElementById("estrelas");
  let valorEstrela = distanciaEstrela.options[distanciaEstrela.selectedIndex].value;

  if (valorEstrela == "nada") {
    resposta2.innerHTML = ` `;
  }
  if (valorEstrela == "sirius") {
    resposta2.innerHTML = `<p> A distância entre a Terra e a Estrela Sirius é: 8,57 anos-luz .</p>`;
    console.log("aaaa")
  }
  if (valorEstrela == "rigel") {
    resposta2.innerHTML = `<p>  A distância entre a Terra e a Estrela Rigel é: 772,89 anos-luz.</p>`;
  }
  if (valorEstrela == "canisMajoris") {
    resposta2.innerHTML = `<p>  A distância entre a Terra e a Estrela Canis Majoris é: 4,892 anos-luz.</p>`;
  }
   if (valorEstrela == "antares") {
    resposta2.innerHTML = `<p>  A distância entre a Terra e a Estrela Antares é: 554.5 anos-luz </p>`;
  }
  if (valorEstrela == "canopus") {
    resposta2.innerHTML = `<p>  A distância entre a Terra e a Estrela Canopus é: 309.8 anos-luz </p>`;
  }
}