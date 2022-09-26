let objetoA = {
    'pontos': '10'

};

objetoB = objetoA;

let objectoC = {
    'pontos': '10'

};

console.log (objetoA == objetoB)
console.log (objetoB == objectoC)
objetoB.pontos = 15
console.log(objetoA)

// mutacao; o obj B se torna uma referencia ao objetoA 

let numeros = [1,2,3,4,5,6]

for(let i = 0; i <= numeros.length; i++) {
    console.log(numeros)
}

// loops em js


let pessoas = ['Carlos', 'Breno', 'João']

let pessoaRemove = pessoas.pop();

console.log(pessoas);
console.log(pessoaRemove);
// pop em JS
pessoas.push('Marcela');
console.log(pessoas);
// append em JS


let nmrs = [2, 5, 6, 9, 0, 10]

console.log(nmrs.indexOf(5));



