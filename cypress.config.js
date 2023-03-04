const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const { beforeRunHook, afterRunHook } = require("cypress-mochawesome-reporter/lib");
const path = require('path');
const { mergeFiles } = require("junit-report-merger");
const fs = require('fs')
const reportDir = path.join(__dirname, 'cypress', 'reports');
const junitReportsRegex = /results-.*\.xml/;

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );

  on('before:run', async (details) => {
    await beforeRunHook(details);
  });

  on('after:run', async () => {
    await afterRunHook();

    // Merge all the junit xmls
    const outputFile = path.join(reportDir, 'combined-junit-report.xml');
    const inputFiles = [path.posix.join('cypress', 'reports', 'results-*.xml')]
    mergeFiles(outputFile, inputFiles);

    // Remove all the junit xmls
    fs.readdirSync(reportDir)
        .filter(f => junitReportsRegex.test(f))
        .map(f => fs.unlinkSync(path.join(reportDir, f)))
  });

  return config;
}

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    experimentalRunAllSpecs: true,
    setupNodeEvents,
  },
  env: {
    tags: ['@Regression']
  },
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    reporterEnabled: "cypress-mochawesome-reporter, mocha-junit-reporter",
    cypressMochawesomeReporterReporterOptions: {
      reportDir: reportDir,
      charts: true,
      reportPageTitle: "Cypress Automation - Learning",
      embeddedScreenshots: true,
      inlineAssets: true,
      quite: true,
      overwrite: true,
      html: false,
      code: false
    },
    mochaJunitReporterReporterOptions: {
      mochaFile: path.join(reportDir, 'results-[hash].xml'),
      toConsole: true
    }
  },
  video: false
});
