/// <reference types="Cypress" />

describe('My First Test Suite', function() {
  it('My First Test Case', function() {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");

    cy.get('.search-keyword').type('ca');
    cy.wait(2000);
    //Get only visible items
    cy.get('.product:visible').should('have.length', 4);
    //Get items using parent-child chaining - core concept
    cy.get('.products').as('productLocator');
    cy.get('@productLocator').find('.product').should('have.length', 4);

    //Add item to cart - test runner inspect and searching the exact element (kind of hard coded way to do this)
    cy.get(':nth-child(3) > .product-action > button').click();
    //Add item to cart - parent-child chaining and searching the element's index (core concept)
    cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click();

    //Add item to cart - iterating through items an get one based on the item's name text (core concept)
    cy.get('@productLocator').find('.product').each(($el, index, $list) => {
      const textVeg = $el.find('h4.product-name').text();
      if(textVeg.includes('Cashews')) {
        cy.wrap($el).find('button').click();
      }
    });

    //Assert if logo text is correctly displayed
    cy.get('.brand').should('have.text', 'GREENKART')

    //Methods outside cypress domain must have it's promises manually resolved (JQuery, JS, etc)
    cy.get('.brand').then(function(logoelement) {
      cy.log(logoelement.text());
    });
  });
});