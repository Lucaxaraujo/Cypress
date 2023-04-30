/// <reference types="Cypress" />

describe('My Seventh Test Suite', function() {
  it('My Seventh Test Case', function() {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get('#alertbtn').click();
    cy.get('#confirmbtn').click();

    //Validate alert pop-up content
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Hello , share this practice page and share your knowledge')
    });

    //Validate confirm pop-up content
    cy.on('window:confirm', (str) => {
      expect(str).to.equal('Hello , Are you sure you want to confirm?');
    });
  });
});