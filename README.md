# cypress-cucumber-multi-reporter
Cypress BDD project with mochawesome HTML and JUnit reports

## Start with
- Clone the project
- Install below VS Code extensions 
   Must
   - Cucumber (Gherkin) Full Support
   Good to have
   - Code Runner
   - Prettier - Code formatter
- [Extension settings](/.vscode/settings.json) - Configure the locations of step definition files, so we can make use of **Cucumber (Gherkin) Full Support** and navigate to step definition
- Make use of scripts added in [package.json](/package.json) to complete local setup and start working with Cypress
   [command line - npm run \<script>]
   - setup: To install all dependencies
   - cypress-run: To execute all test scenarios
   - cypress-open: To open cypress UI
   - run-smoke-tests: To execute all test scenarios tagged 'Smoke'
   - run-regression-tests: To execute all test scenarios tagged 'Regression'

## [cypress.config.js](/cypress.config.js) - Explanation
- Cucumber Preprocessor
   ```js
      await preprocessor.addCucumberPreprocessorPlugin(on, config);
      on(
         "file:preprocessor",
         createBundler({
            plugins: [createEsbuildPlugin.default(config)],
         })
      );
   ```
- Reporter
   - `cypress-multi-reporters`: Helps in generating multiple reports
   ```js
   await preprocessor.addCucumberPreprocessorPlugin(on, config);
   on(
      "file:preprocessor",
      createBundler({
         plugins: [createEsbuildPlugin.default(config)],
      })
   );
   ```
   - `cypress-mochawesome-reporter`: To generate HTML report
   - `mocha-junit-reporter`: To generate JUnit report for each feature file
   - `mocha`: Required for mocha-junit-reporter
   - `junit-report-merger`: Combine JUnit reports generated by mocha-junit-reporter to single file, so that the same can be published in CICD tools
