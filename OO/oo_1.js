let velocidade = 0 
const carro = 
{  
    acelerar: function(){
        velocidade++;
        console.log(velocidade) 
    },  
    freiar: function(){
        velocidade--;
        console.log(velocidade)

    }
}
    

carro.acelerar(); carro.acelerar(); carro.acelerar();  
// cada acelero ele sobe + 1 de velocidade 


listaAcelero = [1, 2, 3]
listaAcelero.forEach(acelero => {
    carro.acelerar();
    
});

// a ideia é a mesma, mas ele ta fazendo pra cada elemento na lista

carro.freiar(); carro.freiar(); carro.freiar();

// da pra colocar mais métodos dentro da função e executar várias ações 

let pessoa = {
    nome: '',
    setNome: function(novoNome){
        this.nome = novoNome;
    },
    getNome: function(){
        return this.nome;
    }

}

pessoa.setNome('breno')
console.log(pessoa.getNome())
