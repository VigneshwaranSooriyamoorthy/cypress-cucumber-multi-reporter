export const getElementCard = (cardName = 'Elements') => {
    return cy.get('h5').contains(cardName);
};
