//devemos referenciar o cypress primeiro
/// <reference types="cypress"/>

//descrição -> describe('Funcionalidade: Login',() => {})
//it -> cenário
describe('Funcionalidade: Login',() => {

    //before e beforeEach são hooks usados para passos repetidos em varios cenários
    //before uma vez antes dos cenarios todos
    //beforeEach uma vez antes de cada cenário
    //after é outro hook normalmente usado para limpar uma base após os testes
    //afterEach uma vez depois de cada cenário, servindo também para screenshot

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso',() => {
        
        cy.get('#username').type('nina@ninateste.com')
        cy.get('#password').type('Biribinha@23')
        cy.get('.woocommerce-form > .button').click() //semprer que for metodo, tem q ter ()        
        cy.get('.woocommerce-MyAccount-content > :nth-child(2) > :nth-child(1)').should('contain','nina') //should é o método de validação
    })
    //it.only serve para executar apenas esse it que está trabalhando, lembrar de tirar dps.
    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('nina2@ninateste.com')
        cy.get('#password').type('Biribinha@23')
        cy.get('.woocommerce-form > .button').click()        
        cy.get('.woocommerce-error > li').should('contain','Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
        cy.get('.woocommerce-error > li').should('exist') //outra forma de validar. vendo se o campo capturado existe.

    });

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {        
        cy.get('#username').type('nina@ninateste.com')
        cy.get('#password').type('Birisbinha@23')
        cy.get('.woocommerce-form > .button').click()        
        cy.get('.woocommerce-error > li').should('contain','Erro: A senha fornecida para o e-mail nina@ninateste.com está incorreta. Perdeu a senha?')
        
    });
})