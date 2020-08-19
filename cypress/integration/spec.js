/// <reference types="cypress" />
describe('page', () => {
  it('two aliases', function() {
    cy.visit('https://example.cypress.io')
    cy.get('h2')
        .its('length')
        .as('num');
    cy.get('@num').then(num => cy.log(`num via '@num' is: ${num}`))
    cy.log(`num via 'this' is: ${this.num}`)
  })
})
