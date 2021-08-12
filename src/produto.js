class Produto {

    constructor(nome, valor=0){
        if (nome){
            this.nome = nome;
            this.valor = valor;
        } else { 
            throw "favor informar nome e valor do produto"
        }
    }

    get descricao(){
        return this.nome + ' | R$' + this.valor;
    }
}

module.exports = Produto