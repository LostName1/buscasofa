/// <reference types="Cypress" />
import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-real-events/support';

Given('el usuario navega a la home', () => {
  cy.visit('/');
});

When('el usuario pulsa el botón de modo oscuro', () => {
  cy.get('.dark-mode-toggle-btn').click();
});

Then('el fondo de la página debería ser oscuro', () => {
  cy.get('body').should('have.class', 'dark-mode');
  cy.get('body').should('have.css', 'background-color').and('match', /rgb\(35, ?39, ?46\)/i);
});

Then('el icono del modo oscuro debería iluminarse en amarillo al pasar el ratón', () => {
  cy.get('.dark-mode-toggle-btn').realHover();
  cy.wait(200);
  cy.get('.dark-mode-toggle-icon')
    .should('have.css', 'color', 'rgb(253, 180, 75)');
});