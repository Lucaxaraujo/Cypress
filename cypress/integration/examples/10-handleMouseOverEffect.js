/// <reference types="Cypress" />

describe('My Tenth Test Suite', function() {
  it('My Tenth Test Case', function() {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    /* 
    Cypress doesn't support mouse over action.
    One option is to use JQuery's 'show' method to handle invisible elements and work with them.
    */
    cy.get('div.mouse-hover-content').invoke('show'); 
    cy.contains('Top').click();
    cy.url().should('include', 'top');

    //Another way is to force the click method (if the scenario is to simply check wether the option is working correctly when clicked).
    cy.contains('Top').click({ force: true });
    cy.url().should('include', 'top');

  });
});