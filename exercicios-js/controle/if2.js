function teste1(num) {
    if(num > 7)    // <- sem o bloco de chaves '{}' só é associado à uma linha de código   
        console.log(num)
    
    console.log('Final') // <- Sempre será executado
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); { // cuidado com o ';', não usar com a estruturas de controle
        console.log(num)
    }
}

teste2(6)
teste2(8)