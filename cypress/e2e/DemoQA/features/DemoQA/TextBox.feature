Feature: Data entry and validation

    @Smoke
    @Regression
    Scenario: Navigation from homepage - Elements
        Given the user navigated to "https://demoqa.com/" application
        When the user clicks "Elements" card from homepage
        Then the user should be redirected to "Elements" page

    @Regression
    Scenario: Text box entry
        Given the user navigated to "https://demoqa.com/elements" application
        When the user clicks on "Text Box" from left panel
        * the user enter Full Name as "Alpha beta"
        * the user enter Email as "alpha@zeta.com"
        * the user enter Current Address as "12345 Delta"
        * the user enter Permanent Address as "7642 Gamma"
        * the user click on Submit button
        Then the user details entered should be listed at the output section
            """
            Name:Alpha beta
            Email:alpha@zeta.com
            Current Address :12345 Delta 
            Permananet Address :7642 Gamma
            """