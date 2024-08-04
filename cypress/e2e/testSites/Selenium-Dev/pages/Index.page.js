export const getElementAppLink = (appName) => {
    return cy.get('a').contains(appName);
};
