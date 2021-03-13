describe('New Contact', () => {
  it('should create a new contact', () => {
    expect(true).to.equal(true)   

    cy.visit('http://localhost:8080/')
    // cy.wait(200)

    cy.get('[data-cy=default-btn]').click()

    cy.url().should('include', '/create')

    cy.get('[data-cy=contact-name]').type('John McClane')
    cy.get('[data-cy=contact-email]').type('john.mcclane@example.com')
    cy.get('[data-cy=contact-phone]').type('+1-202-555-0154')

    cy.get('[data-cy=default-btn]').click()
    // cy.wait(200)

    cy.url().should('eq', 'http://localhost:8080/')

    cy.get('[data-cy=contact-list]').find('[data-cy=contact-list-item]').contains('John McClane')
  })
})