const pessoa = {
    maos: 2
}

console.log(pessoa.hasOwnProperty('maos'));

// ele não tem o método 'hasOwnProperty' mas com ele consegue herdar do Object pai de todos

console.log(pessoa.hasOwnProperty('pes'));

// basicamente ele verifica se há x propiedade dentro de um objeto


