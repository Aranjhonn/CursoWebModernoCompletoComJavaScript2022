function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opsao // No 'do while' você pode também somente iniciada a variável, sem valor inicial!
          // Não é necessário atribuir um valor inicial para a variável opcao, no caso.

do {
    opsao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opsão escolhida foi ${opsao}`)
} while (opsao != -1)

console.log('Até a próxima!')