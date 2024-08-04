import { When } from '@badeball/cypress-cucumber-preprocessor';
import * as loginPage from '../pages/Login.page';

When('the user enter UserName as {string}', (username) => {
    cy.wrap(username).as('BookStoreUsername');
    loginPage.getInputUserName().type(username);
});

When('the user enter Password as {string}', password => {
    loginPage.getInputPassword().type(password);
});

When('the user select Login button', _ => {
    loginPage.getButtonLogin().click();
});
