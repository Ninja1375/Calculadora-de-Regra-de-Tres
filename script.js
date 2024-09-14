function calcular() {
 const a = parseFloat(document
  .getElementById("a").value);
 const b = parseFloat(document
  .getElementById("b").value);
 const c = parseFloat(document
  .getElementById("c").value);
 const tipo = document.getElementById(
   "tipo")
  .value; // Obter o tipo de proporção

 if (!a || !b || !c) {
  alert(
   "Por favor, preencha todos os campos com valores válidos."
  );
  return;
 }

 let x;

 // Verificar o tipo de proporção e realizar o cálculo
 if (tipo === "direta") {
  // Regra de três simples diretamente proporcional: A/B = C/X
  x = (b * c) / a;
 } else if (tipo === "inversa") {
  // Regra de três simples inversamente proporcional: A * X = B * C
  x = (a * b) / c;
 }

 document.getElementById("x").value = x
  .toFixed(2);
 document.getElementById("resultado")
  .innerText = x.toFixed(2);
}

function reiniciar() {
 // Limpar todos os campos
 document.getElementById("a").value =
  '';
 document.getElementById("b").value =
  '';
 document.getElementById("c").value =
  '';
 document.getElementById("x").value =
  '';
 document.getElementById("resultado")
  .innerText = '?';

 // Resetar o tipo de proporção para o padrão
 document.getElementById("tipo")
  .value = 'direta';
}
