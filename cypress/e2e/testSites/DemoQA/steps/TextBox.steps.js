import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { getElementCard } from '../pages/Home.page';
import { getElementMainHeader } from '../pages/General.page';
import * as pageTextBox from '../pages/TextBox.page';
import * as pageLeftPanel from '../pages/LeftSidePanel.page';

When('the user clicks {string} card from homepage', (cardName) => {
    getElementCard(cardName).click();
});

Then('the user should be redirected to {string} page', (title) => {
    getElementMainHeader().should('be.visible').should('have.text', title);
});

When('the user clicks on {string} from left panel', (buttonName) => {
    pageLeftPanel.getElementButton(buttonName).click();
});

When('the user enter Full Name as {string}', (fullName) => {
    pageTextBox.getElementFullName().type(fullName);
});

When('the user enter Email as {string}', (email) => {
    pageTextBox.getElementEmail().type(email);
});

When('the user enter Current Address as {string}', (currentAddress) => {
    pageTextBox.getElementCurrentAddress().type(currentAddress);
});

When('the user enter Permanent Address as {string}', (permanentAddress) => {
    pageTextBox.getElementPermanentAddress().type(permanentAddress);
});

When('the user click on Submit button', (_) => {
    pageTextBox.getElementSubmit().click();
});

Then(
    'the user details entered should be listed at the output section',
    (expectedOutput) => {
        cy.screenshot();
        pageTextBox
            .getElementOutput()
            .should('have.text', expectedOutput.replaceAll('\n', ''));
    }
);
