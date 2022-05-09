const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop()  // remove o último elemento do array/lista
console.log(pilotos)

pilotos.push('Verstappen')  // adiciona um elemento na útima posição do array/lista
console.log(pilotos)

pilotos.shift()  // remove o primeiro elemento do array/lista
console.log(pilotos)

pilotos.unshift('Hamilton')  // adiciona um elemento na primeira posição do array/lista
console.log(pilotos)

// splice() pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // pega parte do array e cria um novo array a partir do índice passado '2'
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // pega parte do array e cria um novo array a partir do índice passado '2'
console.log(algunsPilotos2)                // e vai até o índice passado -1