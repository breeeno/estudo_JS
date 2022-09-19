console.log(typeof 13);
console.log(typeof 13.1);
console.log(typeof -13);

// pro js tudo que é numero é referenciado como number

console.log(1 + 1 );
console.log(2 * 4 - 3)
console.log(4 ** 4 + 3)

//  as operações aritiméticas são iguais as do python 
// + = soma
// * = multiplica
// - = subtração
// / = divisão
// % = resto

console.log(typeof 'isso é uma string, dã')

// strings são strings em qualquer linguagem. tava esperando oq?

console.log(`a soma de 2 + 2 é igual a ${2+2}`);

// F strings são essa coisa feia com $ e ` aspas invertidas

console.log("salada " + "de" + " frutas")

// e da pra concatenar strings tb

console.log(5 > 3 && 2 > 3)

// && para comparar dois valores e certificase que ambos são vdd

console.log(5 > 3 || 3 == 1)

// || se certifica que pelo menos um dos valores é verdade

console.log(!(3 == 3 && 'charmander' == 'charmander'))

// o ! faz com que seja sempre que o booleano seja false, mesmo que os valores contidos dentro estejam corretos

console.log(true ? 1:2);

// é estranho demais e normalmente não é muito usado, mas basicamente, caso seja vdd ele vai exibir 1, caso falso, 2; serio mesmo javascript, que coisa feia

console.log('5' + 1 == 51) 

// HAHAHAHAHAHAH VEI QUE PORRA É ESSA

let a = 5, b = 6, c = 8
let resultado = a*(b + c)
console.log(`o resultado é ${resultado}`)

// Variaveis são declaradas com 'let'

 var d = 4, e = 5, f = 6
 var result = d*(e + f)
 console.log(`o resultado é ${resultado}`)

 // var é a maneira antiga do js de declarar variáveis

 const aa = 1, bb = 2, cc = 3
 var result1 = aa*(bb + cc)
 console.log(`o resultado é ${result1}`)

 // const vem de constante, então seu valor n pode ser alterado

 let $fodase = 1
 let _fodase = 2

 // da pra salvar variáveis com cifrão e underscore tb
 
 let maiorNumero = Math.max(1,5,6,9,0)
console.log(maiorNumero)

let menorNUmero = Math.min(1,5,6,9,0)
console.log(menorNUmero)

// lib integrada 'Math' traz várias operações matemáticas úteis

