/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe';

describe('My 12th Test Suite', function() {
  it('My 12th Test Case', function() {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.frameLoaded('#courses-iframe');

    cy.iframe().find("a[href*='mentorship']").eq(0).click();
    cy.wait(10000);
    cy.iframe().find("h1[classname*='pricing-title']").should('have.length', 2);    
  });
});