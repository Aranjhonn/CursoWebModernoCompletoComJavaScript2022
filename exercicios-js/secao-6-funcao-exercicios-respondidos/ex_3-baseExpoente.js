/*
    03) Crie uma função que recebe dois parâmetros, 
    base e expoente, e retorne a base elevada ao expoente.
*/

function baseExpoente (base, expoente) {
    //Podemos fazer de 2 modos
    
    //Método antigo:
    let resultado = Math.pow(base, expoente)

    //Método novo:
    resultado = base ** expoente  // Usar 'let' se a variável não tiver sido declarada antes.
    return resultado
}

console.log(baseExpoente(2, 5))