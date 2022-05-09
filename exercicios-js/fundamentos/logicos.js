/*
 * v e v -> v    # O operador 'e' (and)
 * v e f -> f    # os dois tem que ser verdadeiros para dar verdadeiro
 * f e ? -> f
 * 
 * v e ? -> v    # O operador 'ou' (or)
 * f e v -> v    # os dois tem que ser falsos para dar falso
 * f e f -> f
 * 
 * v xor v -> f    # O operador 'ou exclusivo' (xor)
 * v xor f -> v    # os dois tem que ser diferente para dar verdadeiro
 * f xor v -> v    # se forem iguais o resultado será falso
 * f xor f -> f
 * 
 * !v -> f    # O operador de negação '!'
 * !f -> v    # se for verdadeiro vira falso
 *            # se for falso vira verdadeiro 
 */

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // Operador bitwise 'xor'
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // Operador unário

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))