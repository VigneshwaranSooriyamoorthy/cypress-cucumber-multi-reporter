import { Then } from '@badeball/cypress-cucumber-preprocessor';
import * as pageBookStoreProfile from '../pages/BookStoreProfile.page';

Then('the user should be redirected to the profile page', _ => {
    cy.url().should('contain', 'profile');
});

Then('the User Name should be displayed as {string}', username => {
    pageBookStoreProfile.getElementUsername().should('have.text', username);
});

Then('the User Name should be displayed as what entered during login', _ => {
    cy.get('@BookStoreUsername').then(username => {
        pageBookStoreProfile.getElementUsername().should('have.text', username);
    });
});
