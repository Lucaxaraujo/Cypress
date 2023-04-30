/// <reference types="Cypress" />

describe('My Sixth Test Suite', function() {
  it('My Sixth Test Case', function() {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get('[value="radio2"]').check().should('be.checked');     
  });
});