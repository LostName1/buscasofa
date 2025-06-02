/// <reference types="Cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("el usuario navega a {string}", function (string) {
    cy.visit(string)
});


Then("debería ver el texto {string}", function (string) {
  cy.get('h1', { timeout: 8000 }).contains(string).should('be.visible');
});
