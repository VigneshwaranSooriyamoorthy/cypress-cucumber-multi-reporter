export const getElementsButton = () => {
  return cy.get(".left-pannel li");
};

export const getElementButton = (buttonName) => {
  return getElementsButton().contains(buttonName);
};
