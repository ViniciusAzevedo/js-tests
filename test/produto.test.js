const assert = require('chai').assert;
const expect = require('chai').expect;
const Produto = require('../src/produto.js');


console.log('produto.test.js', Produto);

describe("Testes de Classe Produto", () => {
    let produto  = new Produto('Meu Produto', 5);

    it("Deve ter valor numerico", (done) => {
        expect(produto.valor).to.be.an('number');
        done();
    })
    it("Deve possuir um nome", (done) => {
        assert(produto.nome!="")
        done();
    })
    it("Deve colocar valor padrão de produto como 0", (done) => {
        let _produto = new Produto("meu Produto");
        assert.equal(_produto.valor, 0);
        done();
    })
    it("Deve gerar descrição correta", (done) => {
        let _produto = new Produto("Meu Produto", 5);
        assert.equal(_produto.descricao, "Meu Produto | R$5");
        done();
    })
});