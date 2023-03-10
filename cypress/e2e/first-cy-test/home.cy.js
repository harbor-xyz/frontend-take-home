/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works visit
// https://on.cypress.io/introduction-to-cypress

describe('load dashboard page', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our app with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('http://localhost:3000/')
  })

  it('displays buttons', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert.
    cy.get('*[class*="buttonWithIconWrap"]').first().should('have.text', 'Docs')
    cy.get('*[class*="buttonWithIconWrap"]').last().should('have.text', 'Last modified')
  })
})
