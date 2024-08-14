FROM cypress/included:13.13.2

WORKDIR dir-cypress-automation
COPY . .

RUN npm i @badeball/cypress-cucumber-preprocessor@20.0.1 @bahmutov/cypress-esbuild-preprocessor esbuild
RUN npm i cypress-mochawesome-reporter cypress-multi-reporters mocha mocha-junit-reporter
RUN npm i -g @deepakvishwakarma/cucumber-json-formatter
