Feature:
  Parameter type help us convert parameters from cucumber-expressions to objects

  Scenario: Navigate to WebForm
    Given the user navigated to "https://www.selenium.dev/selenium/web/index.html" application
    # In the below step value 'web-form.html' is parameterized which is actually not a String but a custom parameter type
    # web-form.html is part of parameter 'seleniumDevLinks'
    When the user clicks on web-form.html link
    Then the user should be redirected to Web form page