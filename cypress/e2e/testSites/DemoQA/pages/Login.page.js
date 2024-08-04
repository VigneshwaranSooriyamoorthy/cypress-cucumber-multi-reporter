export const getInputUserName = () => {
    return cy.get('#userName');
};

export const getInputPassword = () => {
    return cy.get('#password');
};

export const getButtonLogin = () => {
    return cy.get('#login');
}