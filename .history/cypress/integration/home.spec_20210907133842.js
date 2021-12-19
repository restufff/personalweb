/// <reference types="cypress"/>

context("Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should find Home Page and welcome message", () => {
    cy.get("p").contains(
      " self-taught junior Front-End developer. Focusing Front-End journey and crafting beautiful apps with React and ❤️"
    );
  });
});
