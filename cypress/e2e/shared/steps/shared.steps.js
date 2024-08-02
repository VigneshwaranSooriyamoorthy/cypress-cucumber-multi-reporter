import { Given } from '@badeball/cypress-cucumber-preprocessor';

Given('the user navigated to {string} application', (URL) => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    cy.visit(URL);
});
