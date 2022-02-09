// function calc1() {/*Função 1 adição*/
//     var valor1 = document.querySelector('#input1').value;/*Armazenar valor de input 1*/
//     var valor2 = document.querySelector('#input2').value;/*Armazenar valor de input 2*/
//     var result1 = parseInt(valor1) + parseInt(valor2);/*Função em si*/
//     document.querySelector('.result').innerHTML = 'Resultado: ' + result1;/*Imprimir resultado para user*/
// }

function calc2() {/*Função 2 subtração*/
    var valor1 = document.querySelector('#input1').value;/*Armazenar valor de input 1*/
    var valor2 = document.querySelector('#input2').value;/*Armazenar valor de input 2*/
    var result2 = valor1 - valor2;/*Função em si*/
    document.querySelector('.result').innerHTML = 'Resultado: ' + result2;/*Imprimir resultado para user*/
}

function calc3() {/*Função 3 multiplicação*/
    var valor1 = document.querySelector('#input1').value;/*Armazenar valor de input 1*/
    var valor2 = document.querySelector('#input2').value;/*Armazenar valor de input 2*/
    var result3 = valor1 * valor2;/*Função em si*/
    document.querySelector('.result').innerHTML = 'Resultado: ' + result3;/*Imprimir resultado para user*/
}

// function calc4() {/*Função 4 divisão*/
//     var valor1 = document.querySelector('#input1').value;/*Armazenar valor de input 1*/
//     var valor2 = document.querySelector('#input2').value;/*Armazenar valor de input 2*/
//     var result4 = valor1 / valor2;/*Função em si*/
//     document.querySelector('.result').innerHTML = 'Resultado: ' + result4;/*Imprimir resultado para user*/
// }

function clean(){
    document.getElementById('input1').value = '';
    document.getElementById('input2').value = '';
    document.getElementById('result').innerHTML = '';
}