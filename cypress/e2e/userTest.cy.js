/// <reference types="cypress" />
import { faker } from "@faker-js/faker";

import userFactory from "../factory/userFactory";

const URL = "http://localhost:3000";
const email = faker.internet.email();
const password = faker.internet.password();

before(() => {
    cy.resetUsers();
});

describe("User Test", () => {
    it('should create a new user', () => {
        const user = userFactory.generateUser(email, password);
        cy.visit(`${URL}`);
        cy.contains('Para usuários').click();
        cy.url().should('equal', `${URL}/user`);

        cy.contains('Primeira vez? Cadastre-se').get('a').click();
        cy.url().should('equal', `${URL}/user/sign-up`);

        cy.get('input[type="text"] placeholder="Nome (apenas letras)"').type(user.name);
        cy.get('input[type="text"] placeholder="URL imagem de perfil"').type(user.url);
        cy.get('input[type="text"] placeholder="E-mail"').type(user.email);
        cy.get('input[type="password"] placeholder="Senha"').type(user.password);
        cy.get('input[type="password"] placeholder="Confirme a senha"').type(user.confirmPassword);

        cy.intercept('POST', '/user/sign-up').as('createUser');
        cy.contains('Cadastrar').get('button[type="submit"]').click();
        cy.wait('@createUser');

        cy.url().should('equal', `${URL}/user`);
    });

    it('should login a user', () => {
        cy.visit(`${URL}`);
        cy.contains('Para usuários').click();
        cy.url().should('equal', `${URL}/user`);

        cy.get('input[type="text"] placeholder="E-mail"').type(email);
        cy.get('input[type="password"] placeholder="Senha"').type(password);

        cy.intercept('POST', '/user/sign-in').as('loginUser');
        cy.contains('Entrar').get('button[type="submit"]').click();
        cy.wait('@loginUser');

        cy.url().should('equal', `${URL}/user/timeline`);
    });
});
