/// <reference types="cypress"/>
describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });
    //usando lista de produtos, clicando no primeiro da lista ou último
    it('Deve selecionar um produto da lista na primeira posição', () => {
        cy.get('.block-inner')
            .first()
            //.last()
            .click()   
        cy.get('.woocommerce-product-details__short-description > p').should('exist')
    });
    //eq() vai pegar na posição da lista usando numero, sendo que sempre vai começar em 0
    it('Deve selecionar um produto da lista na terceira posição', () => {
        cy.get('.block-inner')
            .eq(2)
            .click()
        cy.get('.woocommerce-product-details__short-description > p').should('exist')
    });
    //usando contains para buscar pelo nome do produto
    it('Deve selecionar um produto da lista pelo nome', () => {
        //cy.get('.block-inner') este bloco contem apenas imagens, não servirá para encontrar o texto.
        cy.get('.products > .row')
            .contains('Apollo Running Short')
            .click()  
        cy.get('.woocommerce-product-details__short-description > p').should('exist')
    });
});