# cypress-cucumber-multi-reporter
BDD Cypress project with HTML and JUnit reports

## Start with
1. Clone the project
2. Install below extenstions
   
   Must
   
   1. Cucumber (Gherkin) Full Support
   
   Good to have
   
   1. Code Runner
   2. Prettier - Code formatter
3. [Extension settings](/.vscode/settings.json)
   
   Configure the locations of step definition files, so we can make use of **Cucumber (Gherkin) Full Support** and navigate to step definition

4. Make use of scripts added in [package.json](/package.json) to complete local setup and start working with Cypress
   [command line - npm run \<script>]
   1. setup: To install all dependencies
   2. cypress-run: To execute cypress test cases
   3. cypress-open: To open cypress UI

## [cypress.config.js](/cypress.config.js) - Explanation
1. Cucumber Preprocessor
   ```js
      await preprocessor.addCucumberPreprocessorPlugin(on, config);
      on(
         "file:preprocessor",
         createBundler({
            plugins: [createEsbuildPlugin.default(config)],
         })
      );
   ```
2. Reporter
   1. `cypress-multi-reporters`: Helps in generating multiple reports
   ```js
   await preprocessor.addCucumberPreprocessorPlugin(on, config);
   on(
      "file:preprocessor",
      createBundler({
         plugins: [createEsbuildPlugin.default(config)],
      })
   );
   ```
   2. `cypress-mochawesome-reporter`: To generate HTML report
   3. `mocha-junit-reporter`: To generate JUnit report for each feature file
   4. `mocha`: Required for mocha-junit-reporter
   5. `junit-report-merger`: Combine JUnit reports generated by mocha-junit-reporter to single file, so the same can be published in CICD tools
