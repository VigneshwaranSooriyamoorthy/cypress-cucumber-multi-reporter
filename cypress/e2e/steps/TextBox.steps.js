import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { getElementCard } from "../pages/Home.page"
import { getElementMainHeader } from '../pages/General.page'

Given('the user navigated to {string} application', URL => {
    cy.visit(URL);
});

When('the user clicks {string} card from homepage', cardName => {
    getElementCard(cardName).click();
});

Then('the user should be redirected to {string} page', title => {
    getElementMainHeader()
        .should('be.visible')
        .should('have.text', title)
});