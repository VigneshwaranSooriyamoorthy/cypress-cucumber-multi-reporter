export const getElementFullName = () => {
    return cy.get('#userName');
};

export const getElementEmail = () => {
    return cy.get('#userEmail');
};

export const getElementCurrentAddress = () => {
    return cy.get('#currentAddress');
};

export const getElementPermanentAddress = () => {
    return cy.get('#permanentAddress');
};

export const getElementSubmit = () => {
    return cy.get('#submit');
};

export const getElementOutput = () => {
    return cy.get('#output');
};
