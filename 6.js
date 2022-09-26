
let nmrs = [2, 5, 6, 9, 0, 10]

console.log(nmrs[0]);

numeros = [0, 1, 2, 3, 4, 5, 6]
console.log(numeros.slice(1, 5))
// recorta os elementos de uma lista e converte em outro array

console.log(numeros.slice(1));

// se vc omitir o segundo parametro ele considera até o fim do array

console.log(numeros.slice(-1))

// da pra usar o negativo pra pegar de trás p frente

let numbers = [1, 2, 3, 4, 5, 6]

numbers.forEach(num =>{
    console.log('fodase')
})

// basicamente a iteração sobre cada elemento 

console.log(numbers.includes(5))

// verifica se contém determinado elemento em um array

console.log(numbers.includes('5'))

// essa caraia de lang soma duas string mas nao interpreta que um 5 e '5' são a mesma coisa 

console.log(numbers.reverse());

// como o nome sugere, inverte um array
