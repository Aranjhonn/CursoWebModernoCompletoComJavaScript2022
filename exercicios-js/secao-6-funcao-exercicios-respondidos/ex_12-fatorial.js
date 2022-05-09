/*
    12) Faça um algoritmo que calcule o fatorial de um número.
*/

function fatoria(numero) {
    if (numero == 0) {
        return 1
    } else {
        return numero * fatoria(numero - 1)
    }
}

console.log(fatoria(10))