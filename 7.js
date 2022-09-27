let nome = ' \n  texto  \n'
nomeCorrigido = nome.trim();

console.log(nomeCorrigido)

// corta espaço entre as strings 

let sku = '34'

console.log(sku.padStart(6, '0'))

// quantidade de digitos obrigatórios / complete no inicio da string

let frase = 'po mano cade the last of us no pc?'

fraseCorrigida = frase.split(" ")

console.log(fraseCorrigida)

// split pra separar string ou arrays

let frase1 = ['audi', 'subaru', 'bmw', 'mitshubishi']

let novaFrase = frase1.join('|');

console.log(novaFrase)