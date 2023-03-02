/// <reference types="Cypress" />

describe('My Fifth Test Suite', function() {
  it('My Fifth Test Case', function() {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    //Handling static dropdowns
    cy.get('select').select('option2').should('have.value', 'option2'); 
    
    //Handling dinamic dropdowns
    cy.get('#autocomplete').type('Br');
    cy.get('.ui-menu-item div').each(($el, index, $list) => {
      if($el.text() === 'Brazil') {
        cy.wrap($el).click();
      }
    });

    cy.get('#autocomplete').should('have.value', 'Brazil')

  });
});