let numeros = [1, 2, 3, 4, 5]

console.log([numeros[0]])
console.log([numeros.length])
console.log([numeros['length']])


let marca = 'nike'

console.log(marca.toUpperCase());

let pessoa = {
    "nome": 'breno',
    "idade": '19',
    "stack": 'python/django',
    cumprimentar: function(){
        console.log('Olá!')
    }
}

console.log(pessoa['nome'].toUpperCase())
console.log(pessoa['idade'].toUpperCase())
console.log(pessoa['stack'].toUpperCase())
// 1̣a maneira de chamar as propiedades do objeto

console.log(pessoa.nome.toUpperCase())
console.log(pessoa.idade.toUpperCase())
console.log(pessoa.stack.toUpperCase())
// 2a maneira

pessoa.cumprimentar()

// invocando funções dentro de um objeto

let carro = {
    'marca': 'subaru',
    'modelo': 'impreza shark',
    'turbo': true
}
// objeto

carro.turbo = false
console.log(carro)

// mudando propiedade

delete carro.turbo

// deletando propiedade

console.log(carro)

carro.TetoSolar = false

// criando propiedade

console.log(carro)

let carro2 = {
    'marca': 'mitsubishi',
    'modelo': 'evo VIII',
    'cambio': 'manual'
}

let opcionais = {
    'teto solar': true,
    'som multimidia': true

}

console.log(carro2)
Object.assign(carro2, opcionais)
console.log(carro2)


let obj = {
    'primeiro_obj': 1,
    'segundo_obj': 2,
    'terceiro_obj': 3

}

console.log(obj)
console.log(Object.keys(obj))