/// <reference types="Cypress" />
import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('el usuario navega a la home', () => {
  cy.visit('/');
});

Then('debería ver el texto "Javier Moyano Vizcaino" en el footer', () => {
  cy.get('footer > div>  ul>  li').contains('Javier Moyano Vizcaino').should('be.visible');
});

Then('debería ver el texto "Rubén Rabanedo Aldonza" en el footer', () => {
  cy.get('footer > div > ul > li').contains('Rubén Rabanedo Aldonza').should('be.visible');
});

Then('debería ver el texto "Adrián Sanz Contreras" en el footer', () => {
  cy.get('footer > div > ul > li').contains('Adrián Sanz Contreras').should('be.visible');
});

Then('debería ver el texto "Antonio Serrano Fernández" en el footer', () => {
  cy.get('footer>  div > ul > li').contains('Antonio Serrano Fernández').should('be.visible');
});

Then('debería ver el texto "Jon Zarate Martínez" en el footer', () => {
  cy.get('footer > div > ul > li').contains('Jon Zarate Martínez').should('be.visible');
});

