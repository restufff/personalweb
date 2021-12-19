/// <reference types="cypress"/>

context("Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should find Home Page and welcome message", () => {
    cy.get("Text").contains("Hi, I'm Restu Fauzi");
  });
});
