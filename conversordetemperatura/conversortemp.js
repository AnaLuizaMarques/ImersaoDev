let celsiusToFahrentheit = document.getElementById('ctoF');
let fahrentheitToCelsius = document.getElementById('fToC');

function celsiusToFahrentheitConversor() {
  let cToF = Number(celsiusToFahrentheit.value);
  let calculoConversor = ((cToF * 1.8) + 32).toFixed(1);
  resposta.innerHTML = `<p> ${cToF} °C corresponde a ${calculoConversor} °F.</p>`
 }

function fahrentheitToCelsiusConversor() {
  let fToC = Number(fahrentheitToCelsius.value);
  let calculoConversorDois = ((fToC - 32) * .5556).toFixed(1);
    respostaDois.innerHTML = `<p> ${fToC} °F corresponde a ${calculoConversorDois} °C.</p>`
}