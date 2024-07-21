import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { getElementCard } from "../pages/Home.page";
import { getElementMainHeader } from "../pages/General.page";
import * as pageTextbox from "../pages/TextBox.page";
import * as pageLeftPanel from "../pages/LeftSidePanel.page";

Given("the user navigated to {string} application", (URL) => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  cy.visit(URL);
});

When("the user clicks {string} card from homepage", (cardName) => {
  getElementCard(cardName).click();
});

Then("the user should be redirected to {string} page", (title) => {
  getElementMainHeader().should("be.visible").should("have.text", title);
});

When("the user clicks on {string} from left panel", (buttonName) => {
  pageLeftPanel.getElementButton(buttonName).click();
});

When("the user enter Full Name as {string}", (fullName) => {
  pageTextbox.getElementFullName().type(fullName);
});

When("the user enter Email as {string}", (email) => {
  pageTextbox.getElementEmail().type(email);
});

When("the user enter Current Address as {string}", (currentAddress) => {
  pageTextbox.getElementCurrentAddress().type(currentAddress);
});

When("the user enter Permanent Address as {string}", (permanentAddress) => {
  pageTextbox.getElementPermanentAddress().type(permanentAddress);
});

When("the user click on Submit button", (_) => {
  pageTextbox.getElementSubmit().click();
});

Then(
  "the user details entered should be listed at the output section",
  (expectedOutput) => {
    cy.screenshot();
    pageTextbox
      .getElementOutput()
      .should("have.text", expectedOutput.replaceAll("\n", ""));
  }
);
