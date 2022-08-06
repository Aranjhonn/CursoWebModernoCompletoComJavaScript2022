// let, const (escopo de bloco) e var (escopo global)
{
    var a = 1
    let b = 2
    const c = 3
    console.log(b)
    console.log(c)
}
console.log(a)

// Template String
const produto = 'iPad'
console.log(`${produto} é caro`)

// Operador Destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const { idade: i, nome } = { nome: 'Ana', idade: 9 }
console.log(i, nome)