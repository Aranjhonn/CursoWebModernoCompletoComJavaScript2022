// Formas de criar 'Objetos'

// Forma 1: usando a notação literal
const obj1 = {}
console.log(obj1)

// Forma 2: Object em JS (a partir de uma função construtora)
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Forma 3: a partir de suas próprias 'Funções Construtoras'
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Forma 4: a partir de uma 'Função Factory'
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

// Forma 5: a partir do 'Object.create' (mais detalhes mais a frente no curso)
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Forma 6: a partir 'Uma função famosa que retorna Objeto... (mais detalhes mais a frente no curso)
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)