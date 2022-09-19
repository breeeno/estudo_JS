let idade = 17;

if (idade > 18) {
console.log('Pode entrar')
} else {
    console.log('Não tem a idade suficiente.')
}

let nome = 'breno'

if (idade != undefined && nome == 'lucas'){
    console.log('O nome está definido')

} else if (nome == 'breno' && nome.length > 3){
    console.log('fodase')
}

// if e else são definidos dessa maneira feia aqui

let x = 10

while (x > 0){
    console.log(`o x é ${x}` )
    x = x - 1
}

// a ideia do while é a mesma coisa

let y = 100

do {
    console.log(y/2);
    y = y - 5;     
} while(y >= 0);


for (let numero = 5; numero < 100; numero = numero * 2){
    console.log(`o numero é ${numero}`)
} 

// o for provavelmente é o mais usado e útil, pq vc pode setar várias condições de uma vez e o código fica mais legível.

let nome1 = 'breno'

switch(nome1) {
    case 'joão':
        console.log('o nome é joão')
        break;
    case 'lucas':
        console.log(' o nome é lucas')
        break;
    case 'breno':
        console.log('o nome é breno')
        break;
    default:
        console.log('o nome não é nenhum desses casos')

}

// switch cases testam várias condições sem depender dos ifs e elses, achei bem interessante 

