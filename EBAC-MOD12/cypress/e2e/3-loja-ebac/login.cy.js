/// <reference types="cypress"/>
//primeiro é preciso importar o arquivo para usar a constante -  cada ".." volta um nível de pasta
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: Login',() => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });
    afterEach(() => {
        cy.screenshot()
    });

    // it('Deve fazer login com sucesso',() => {       
    //     cy.get('#username').type('nina@ninateste.com')
    //     cy.get('#password').type('Biribinha@23')
    //     cy.get('.woocommerce-form > .button').click()        
    //     cy.get('.woocommerce-MyAccount-content > :nth-child(2) > :nth-child(1)').should('contain','nina')
    // });

    // it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
    //     cy.get('#username').type('nina2@ninateste.com')
    //     cy.get('#password').type('Biribinha@23')
    //     cy.get('.woocommerce-form > .button').click()        
    //     cy.get('.woocommerce-error > li').should('contain','Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
    //     cy.get('.woocommerce-error > li').should('exist')
    // });

    // it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {        
    //     cy.get('#username').type('nina@ninateste.com')
    //     cy.get('#password').type('Birisbinha@23')
    //     cy.get('.woocommerce-form > .button').click()        
    //     cy.get('.woocommerce-error > li').should('contain','Erro: A senha fornecida para o e-mail nina@ninateste.com está incorreta. Perdeu a senha?')       
    // });
    
    it('Deve fazer login com sucesso - Usando massa de dados',() => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()        
        cy.get('.woocommerce-MyAccount-content > :nth-child(2) > :nth-child(1)').should('contain','nina')  
    });
    //ou desta forma
    it('Deve fazer login com sucesso - Usando Fixture',() => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha, {log: false }) //log: false para esconder senha no log
            cy.get('.woocommerce-form > .button').click()        
            cy.get('.woocommerce-MyAccount-content > :nth-child(2) > :nth-child(1)').should('contain','nina')          
        })
    });
    

})