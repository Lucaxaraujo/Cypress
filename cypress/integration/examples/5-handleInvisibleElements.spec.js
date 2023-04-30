/// <reference types="Cypress" />

describe('My Fifth Test Suite', function() {
  it('My Fifth Test Case', function() {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get('#displayed-text').as('textLocator');
    cy.get('@textLocator').should('be.visible'); 
    cy.get('#hide-textbox').click(); 
    cy.get('@textLocator').should('not.be.visible');
    cy.get('#show-textbox').click(); 
    cy.get('@textLocator').should('be.visible');   
  });
});