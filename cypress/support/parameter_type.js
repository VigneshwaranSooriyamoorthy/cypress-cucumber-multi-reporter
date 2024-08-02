import { defineParameterType } from '@badeball/cypress-cucumber-preprocessor';

defineParameterType({
    name: 'seleniumDevLinks',
    regexp: /formPage.html|tables.html|web-form.html/,
    transformer: link => link
});
