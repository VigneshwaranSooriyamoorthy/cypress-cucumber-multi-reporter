import * as demoQaUrls from '../../fixtures/demoqa-api';

export const interceptDemoQA = () => {
    cy.log('API intercept');
    cy.intercept('GET', demoQaUrls.GOOGLE_SYNDICATION_GAMPAD, {});
    cy.intercept('GET', demoQaUrls.GOOGLE_SYNDICATION_CONFIG, {});
    cy.intercept('GET', demoQaUrls.GOOGLE_ANALYTICS, {});
};