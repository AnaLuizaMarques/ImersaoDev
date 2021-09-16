let numeroSecreto = parseInt(Math.random() * 11);
let contador = 0;

function chutar() {
  contador++;
  let chute = parseInt(document.getElementById("valor").value);
  if (chute == numeroSecreto) {
    resposta.innerHTML = `<p>Parabéns! Você acertou!</p>`;
  }
  if (chute > numeroSecreto) {
    resposta.innerHTML = `<p>Você errou! O número é menor que  ${chute}.</p>`;
  }
  if (chute < numeroSecreto) {
    resposta.innerHTML = `<p>Você errou! O número é maior que  ${chute}.</p>`;
  } else if (chute > 10 || chute < 0) {
    resposta.innerHTML = `<p>Você deve digitar um numero entre 0 e 10, tente novamente.</p>`;
  }
}

document.getElementById("valor").addEventListener("input", function (event) {
  if (contador < 3) {
    document.getElementById("botao").disabled = false;
  } else {
    document.getElementById("botao").disabled = true;
    resposta.innerHTML = `<p>Você atigiu o limite de tentativas!</p>`;
  }
});
