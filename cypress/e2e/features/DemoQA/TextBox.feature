Feature: Data entry and validation

    @Regression
    Scenario: Navigation from homepage - Elements
        Given the user navigated to "https://demoqa.com/" application
        When the user clicks "Elements" card from homepage
        Then the user should be redirected to "Elements" page