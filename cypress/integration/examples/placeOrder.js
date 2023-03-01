/// <reference types="Cypress" />

describe('My First Test Suite', function() {
  it('My First Test Case', function() {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");

    cy.get('.search-keyword').type('ca');
    cy.wait(2000);
    
    //Add item to cart - iterating through items an get one based on the item's name text (core concept)
    cy.get('.products').as('productLocator');    
    cy.get('@productLocator').find('.product').each(($el, index, $list) => {
      const textVeg = $el.find('h4.product-name').text();
      if(textVeg.includes('Cashews')) {
        cy.wrap($el).find('button').click();
      }
    });

    cy.get('.cart-icon > img').click();
    cy.contains('PROCEED TO CHECKOUT').click();
    cy.contains('Place Order').click();



  });
});