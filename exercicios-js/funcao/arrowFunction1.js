// Exemplos de funções normais e funções 'arrow'
// Normal
let dobro = function (a) {
    return 2 * a
}
// Arrow
dobro = (a) => {
    return 2 * a
}
//Arrow
dobro = a => 2 * a  // return implícito
console.log(dobro(Math.PI))

// Normal
let ola = function () {
    return 'Olá'
}
// Arrow
ola = () => 'Olá'
ola = _ => 'Olá' // possui um parâmetro
console.log(ola())