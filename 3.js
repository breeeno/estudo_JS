function olaMundo(){
    console.log('olá mundo!')

}

olaMundo();

function printNmr(num){
    console.log('o numero é '+ num)
}

printNmr(2)


const numeroAleatorio = function(){
    console.log(Math.random());
}

numeroAleatorio()

function multiplicarNmr(x, y, z){
    return x * y * z
}

console.log(multiplicarNmr(1,2,3))

function somarNmrs(a, b){
    return a + b
}

console.log((somarNmrs(2, 6)))

const som = somarNmrs(2, 7)

console.log('A soma é de ' + som)

// a ideia é parecida com a do python, sendo possível atribuir funções a varíaveis

function podeDirigir(idade, cnh){
    if (idade >= 18 && cnh == true){
        console.log('Pode digir')
    }
    else {
        console.log('Não pode dirigir')
    }
}

podeDirigir(19, false)
// não pode
podeDirigir(18, true)
// pode
podeDirigir(18, 0)
// 0 é interpretado como 'falso'
podeDirigir(18, 1)
// 1 é interpretado como 'true'


let n = 10

const numero = function(n){
    n = 15
    console.log(n)
}

console.log(n)
numero(5)

// oq acontece dentro do escopo da função fica dentro do escopo da função 


const parOuImpar = (n) => {
    return n % 2;
};

console.log(parOuImpar(5))

// arrow functions são tipo funções lambda

function multiplicacao(primeiro, segundo=2){
    return primeiro * segundo
}

console.log(multiplicacao(2))

// funcion com argumento default