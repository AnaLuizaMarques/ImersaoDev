let result = document.getElementById('result');
let nota1 = document.getElementById('1nt');
let nota2 = document.getElementById('2nt');
let nota3 = document.getElementById('3nt');
let nota4 = document.getElementById('4nt');

function calcularMedia() {
  let nt1 = Number(nota1.value);
  let nt2 = Number(nota2.value);
  let nt3 = Number(nota3.value);
  let nt4 = Number(nota4.value);
  let notaFinal = (((nt1 + nt2 + nt3 + nt4) / 4).toFixed(1));

  if (notaFinal < 6) {
    resposta.innerHTML = `<p> Infelizmente, voce foi reprovado. Sua nota total foi: ${notaFinal}.</p>`
  } else {
    resposta.innerHTML = `<p> Parabens, voce foi aprovado! Sua nota total foi: ${notaFinal}.</p>`
  }
}