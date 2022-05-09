// coleção dinamica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Genérica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

// outro mode de criar um 'objeto' (um pouco mais complexo)
const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {  // <- um 'objeto' dentro do 'objeto'
        nome: 'Raul',
        idade: '56',
        endereco: {  // <- outro 'objeto' dentro de outro 'objeto'
            logradouro: 'Rua ABC',
            numero: 123                
        }
    },
    condutores: [{  // <- um 'Array' de 'objetos'
        nome: 'Júnior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function() {  // <- você também pode ter uma função dentro de um 'objeto'
        // ...
    }
}

// acessando o 'objeto' (2 formas)
// forma 1:
carro.proprietario.endereco.numero = 1000
// forma 2:
carro['proprietario']['endereco']['logradouro'] = 'Av. Gigante'
console.log(carro)

// delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)