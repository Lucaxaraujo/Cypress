/// <reference types="Cypress" />

describe('My Ninth Test Suite', function() {
  it('My Ninth Test Case', function() {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
      const text = $el.text();

      if(text.includes('Python')) {
        //next method can only be used with get method, so the promise must be manually resolved after
        cy.get('tr td:nth-child(2)').eq(index).next().then(function(price) {
          const priceText = price.text();
          expect(priceText).to.equal('25');
        })
      };
    });

  });
});