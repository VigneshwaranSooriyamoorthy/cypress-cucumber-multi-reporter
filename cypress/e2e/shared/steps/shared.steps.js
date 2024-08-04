import { Given } from '@badeball/cypress-cucumber-preprocessor';
import { interceptDemoQA } from '../../utils/intercepts';

Given('the user navigated to {string} application', (URL) => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    switch (true) {
        case URL.includes('demoqa'):
            interceptDemoQA();
            break;
    }
    cy.visit(URL);
});
