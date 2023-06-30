//El programa indicara segun la nota introducida a que rango corresponde
function calcularRango() {
  var nota = parseFloat(document.getElementById("notaInput").value);
  var resultado = document.getElementById("resultado");

  if (nota >= 0 && nota <= 2.99) {
    resultado.textContent = "Muy deficiente";
  } else if (nota >= 3 && nota <= 4.99) {
    resultado.textContent = "Insuficiente";
  } else if (nota >= 5 && nota <= 5.99) {
    resultado.textContent = "Suficiente";
  } else if (nota >= 6 && nota <= 6.99) {
    resultado.textContent = "Bien";
  } else if (nota >= 7 && nota <= 8.99) {
    resultado.textContent = "Notable";
  } else if (nota >= 9 && nota <= 10) {
    resultado.textContent = "Sobresaliente";
  } else {
    resultado.textContent = "Nota inválida";
  }
}

