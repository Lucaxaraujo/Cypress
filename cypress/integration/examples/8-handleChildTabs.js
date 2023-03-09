/// <reference types="Cypress" />

describe('My Eighth Test Suite', function() {
  it('My Eighth Test Case', function() {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    //Using Jquery function 'removeAtt' to open tab in same window
    cy.get('#opentab').invoke('removeAttr', 'target').click();
  });
});