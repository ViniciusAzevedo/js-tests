const assert = require('chai').assert;
const expect = require('chai').expect;
const Store = require('../src/store.js');
const Produto = require('../src/Produto.js');


console.log('store.test.js', Store);

describe("Testes da Classe Store", () => {
    let store = new Store();

    it("Deve inicializar um store", (done) => {
        expect(store.lista).to.be.an('array');
        done();
    });
    it("Deve ter total = 0 ao criar store", (done) => {
        assert.equal(store.total, 0)
        done();
    });
    it("Deve rejeitar adicionar produto vazio", (done) => {
        expect( () => store.addProduto()).to.throw(TypeError);
        done();
    });
    it("Deve adicionar um produto e totalizar corretamente seu valor", (done) => {
        const TOTAL_ESPERADO = 5;
        let produto  = new Produto('Meu Produto', TOTAL_ESPERADO);
        store.addProduto(produto);
        assert.equal(store.total, TOTAL_ESPERADO);
        done();
    });
    it("Deve remover um produto e totalizar corretamente o valor", (done) => {
        const TOTAL_ESPERADO = 0;
        store.removerProduto(0);
        assert.equal(store.total, TOTAL_ESPERADO);
        done();
    });
    it("Deve gerar descrição de produtos ", (done) => {
        let produto1 = new Produto('Meu Produto 1', 5);
        let produto2 = new Produto('Meu Produto 2', 10);
        store.addProduto(produto1)
            .addProduto(produto2);
        console.log(store.descricao);
        assert.equal(store.descricao, "Meu Produto 1 | R$5\nMeu Produto 2 | R$10");
        done();
    });
});