import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import * as pageIndex from '../pages/Index.page';
import * as pageWebForm from '../pages/WebForm.page';

When('the user clicks on {seleniumDevLinks} link', (linkName) => {
    pageIndex.getElementAppLink(linkName).click();
});

Then('the user should be redirected to Web form page', () => {
    pageWebForm.getElementHeader().should('be.visible');
});
