// Estratégia 1 para gerar valor padrão
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}                                              
                                               // No caso de ser passado os parâmetros '0' ele vai assumir o valor padrão
console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))

// Estratégias 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1  // Estratégia 2
    b = 1 in arguments ? b : 1   // Estratégia 3
    c = isNaN(c) ? 1 : c         // Estratégia 4
    return a + b + c
}
                                               // Já nesse caso os parâmetros passados vão assumir o valor de '0' mesmo
console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

// Valor padrão do es2015 (mais usual) # Nova Estratégia 
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))