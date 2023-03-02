/// <reference types="Cypress" />

describe('My Fourth Test Suite', function() {
  it('My Fourth Test Case', function() {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked');   

    //Selecting multiple checkboxes 
    cy.get('input[type="checkbox"]').check(['option2','option3']);    
  });
});