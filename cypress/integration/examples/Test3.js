/// <reference types="Cypress" />

describe('My First Test Suite', function() {
  it('My First Test Case', function() {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');

    
    
  });
});