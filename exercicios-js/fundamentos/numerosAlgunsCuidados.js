console.log(7 / 0) // Qualquer número dividido por zoro gera 'Infinity'
console.log("10" / 2) // Pode fazer operações com números em Strings, com algumas regras
console.log('3' + 2) // Nesse caso ele não vai 'somar', e sim 'Concatenar' (A 'String' ganha)
console.log('3' - 2) // Nesse caso ele vai fazer a operação de 'menos' como no caso da 'divisão' mais a cima
console.log("Show" * 2) // Gera um Not a Number 'NaN'
console.log(0.1 + 0.7) // Gera uma imprecisão (Tomar cuidado com isso!)
// console.log(10.toString())-> Não consegue chamar diretamente um literal pondo a função
console.log((10.345).toString(2)) //-> Mas sim ponde entre parêntese sem obrigatoriamente chamar a função