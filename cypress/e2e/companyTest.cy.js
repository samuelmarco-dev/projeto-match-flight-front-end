/// <reference types="cypress" />
import { faker } from "@faker-js/faker";
import companyFactory from "../factory/companyFactory";

const URL = "http://localhost:3000";
const email = faker.internet.email();
const password = faker.internet.password();

describe("Company Test", () => {
    it("should create a new company", () => {
        const company = companyFactory.generateCompany(email, password);
        cy.visit(`${URL}`);
        cy.contains("Para empresas").click();
        cy.url().should('equal', `${URL}/company`);

        cy.contains('Primeira vez? Cadastre-se').get('a').click();
        cy.url().should('equal', `${URL}/company/information`);

        cy.get('input[type="text"] placeholder="Empresa (apenas letras)"').type(company.name);
        cy.get('input[type="text"] placeholder="Cidade"').type(company.city);
        cy.get('input[type="text"] placeholder="Estado por extenso"').type(company.state);
        cy.get('input[type="text"] placeholder="Tipo da empresa').type(company.type);
        cy.contains('Seguir para cadastro').get('button[type="submit"]').click();

        cy.url().should('equal', `${URL}/company/sign-up`);
        cy.get('input[type="text"] placeholder="CNPJ 00.000.000/0000-00"').type(company.cnpj);
        cy.get('input[type="text"] placeholder="URL imagem de perfil"').type(company.url);
        cy.get('input[type="text"] placeholder="E-mail"').type(company.email);
        cy.get('input[type="password"] placeholder="Senha"').type(company.password);
        cy.get('input[type="password"] placeholder="Confirme a senha"').type(company.confirmPassword);

        cy.intercept('POST', '/company/sign-up').as('createCompany');
        cy.contains('Cadastrar').get('button[type="submit"]').click();
        cy.wait('@createCompany');

        cy.url().should('equal', `${URL}/company`);
    });
});
