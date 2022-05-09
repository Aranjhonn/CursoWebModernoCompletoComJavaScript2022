function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notbook', 2199.99))
console.log(criarProduto('Notbook', 1199.99))