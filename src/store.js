

class Store {

    constructor() {
        console.log("Novo Store");
        this.lista = [];
        this.produtos = []
    }

    addProduto(produto) {
        try {
            if (produto.valor) {
                this.produtos.push(produto);
                this.calcularTotais();
            } else {
                throw new TypeError("Produto não possui valor");
            }
        } catch (e) {
            throw new TypeError("Não foi possível adicionar o produto. " + e);
        }
        return this;
    }

    removerProduto(indice) {
        try {
            this.produtos.splice(indice, 1);
            this.calcularTotais();
        } catch (e) {
            throw new TypeError("Não foi possível remover o produto. " + e);
        }
    }

    calcularTotais() {
        return this.produtos.reduce((acumulador, produto) => acumulador + produto.valor, 0)
    }

    get total(){
        return this.calcularTotais();
    }

    get descricao(){
        return this.produtos.map((produto) => produto.descricao ).join('\n') 
    }
}

/*
function Store(){}

Store.prototype.addProduto = function(){
    console.log('add produto');
}
*/

module.exports = Store