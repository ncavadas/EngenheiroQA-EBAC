/// <reference types="cypress"/>
import { faker } from "@faker-js/faker";

describe('Funcionalidade: Cadastro', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    // afterEach(() => {
    //     cy.screenshot()
    // });
    it('Deve completar o cadastro com sucesso', () => {
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type(faker.internet.password())
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(faker.person.firstName())
        cy.get('#account_last_name').type(faker.person.lastName())
        //cy.wait(5000) comando usado para esperar 5 segundos antes de continuar (não manter no teste pois não é uma boa prática)
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('exist')       
    });

    //Cenário igual usando variáveis para que os dados sejam correlatos
    it('Deve completar o cadastro com sucesso', () => {
        var nome = faker.person.firstName()
        var email = faker.internet.email(nome)
        var sobrenome =faker.person.lastName()

        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type(faker.internet.password())
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nome)
        cy.get('#account_last_name').type(sobrenome)
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('exist')       
    });
     
});