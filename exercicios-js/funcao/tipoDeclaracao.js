console.log(soma(3, 4)) // * function declaration é possível chamar antes da declaração da função

// function declaration
function soma(x, y) { // função 'nomeada'
    return x + y
}

// function espression
const sub = function (x, y) { // função 'anânima'
    return x - y
}
console.log(sub(3, 4)) // function espression, Não pode chamar antes da declaração da função

// named function expression
const mult = function mult(x, y) {  // função 'nomeada' (menos utilizada)
    return x * y
}
console.log(mult(3, 4)) // named function expression, Não pode chamar antes da declaração da função