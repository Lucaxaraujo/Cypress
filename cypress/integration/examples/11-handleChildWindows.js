/// <reference types="Cypress" />

describe('My Tenth Test Suite', function() {
  it('My Tenth Test Case', function() {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    //Another way to visit links that open in external page or tab
    cy.get('#openwindow').then(function(el) {
      const url = el.prop('href');
      cy.log(url);
      cy.visit(url);
    });   
  });
});