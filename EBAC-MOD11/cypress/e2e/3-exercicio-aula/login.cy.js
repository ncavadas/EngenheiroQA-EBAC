//devemos referenciar o cypress primeiro
/// <reference types="cypress"/>

//descrição -> describe('Funcionalidade: Login',() => {})
//it -> cenário
describe('Funcionalidade: Login',() => {

    it('Deve fazer login com sucesso',() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('nina@ninateste.com')
        cy.get('#password').type('Biribinha@23')
        cy.get('.woocommerce-form > .button').click() //semprer que for metodo, tem q ter ()
        
        cy.get('.woocommerce-MyAccount-content > :nth-child(2) > :nth-child(1)').should('contain','nina') //should é o método de validação
    })
})