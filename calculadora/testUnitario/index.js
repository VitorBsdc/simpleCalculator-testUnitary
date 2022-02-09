function calc1() {
  /*Função 1 adição*/
  var valor1 =
    document.querySelector("#input1").value; /*Armazenar valor de input 1*/
  var valor2 =
    document.querySelector("#input2").value; /*Armazenar valor de input 2*/
  var result1 = parseFloat(valor1) + parseFloat(valor2); /*Função em si*/
  document.querySelector(".result").innerHTML =
    "Resultado: " + result1; /*Imprimir resultado para user*/
}

// Testes feitos - Soma =

// pode somar números positivos 1 e 1? Sim
// pode somar os números positivos 1 e 2? Sim
// pode somar os números positivos 2 e 2? Sim
// O zero é neutro? Sim
// pode somar os números negativos -1 e -2? Sim
// pode somar um número positivo e um negativo? Sim
// E quanto aos números grandes? Sim

// Testes feitos - Subtração =

// pode subtrair números positivos 1 e 1? Sim
// pode subtrair os números positivos 1 e 2? Sim
// pode subtrair os números positivos 2 e 2? Sim
// O zero é neutro? Sim
// pode subtrair os números negativos -1 e -2? Sim
// pode subtrair um número positivo e um negativo? Sim
// E quanto aos números grandes? Sim

// Testes feitos - Multiplicação =

// pode multiplicação de números positivos 1 e 1? Sim
// pode multiplicação de números positivos 1 e 2? Sim
// pode multiplicação de números positivos 2 e 2? Sim
// O zero é neutro? Sim
// pode multiplicação de números negativos -1 e -2? Sim
// pode multiplicação de número positivo e um negativo? Sim
// E quanto aos números grandes? Sim

// Testes feitos - Divisão =

// pode divisão de números positivos 1 e 1? Sim
// pode divisão de números positivos 1 e 2? Sim
// pode divisão de números positivos 2 e 2? Sim
// O zero é neutro? Sim
// pode divisão de números negativos -1 e -2? Sim
// pode divisão de número positivo e um negativo? Sim
// E quanto aos números grandes? Sim

function calc4() {
  /*Função 4 divisão*/
  var valor1 =
    document.querySelector("#input1").value; /*Armazenar valor de input 1*/
  var valor2 =
    document.querySelector("#input2").value; /*Armazenar valor de input 2*/

  if (valor1 == 0 && valor2 == 0) {
    alert("Valor inválido!");
  }

  var result4 = valor1 / valor2; /*Função em si*/
  document.querySelector(".result").innerHTML =
    "Resultado: " + result4; /*Imprimir resultado para user*/

  if (valor2 == 0) {
    alert("Não é possível dividir por zero!");
    document.getElementById("result").innerHTML = "";
  }
}
