Feature:
  Cypress commands are async and chained, so there is nothing returned
  let a = cy.get('') won't work
  So in order to share data / object within Cypress ecosystem we can use alias

  Background:
    Given the user navigated to "https://demoqa.com/login" application
    When the user enter UserName as "AlphaBeta"
    And the user enter Password as "Password@#123"
    And the user select Login button
    Then the user should be redirected to the profile page

  Scenario: Without using alias
    Then the User Name should be displayed as "AlphaBeta"

  Scenario: Using alias
    Then the User Name should be displayed as what entered during login