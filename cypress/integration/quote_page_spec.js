describe('Quote Page', () => {
  beforeEach(() => {
    cy.quoteLoad()
  })

  it('Should update the URL', () => {
    cy.url().should('include', 'quote')
  })

  it('Should display the Navbar', () => {
    cy.get('.nav-bar').should('be.visible')
      .get('.nav-bar').should('contain', 'Daily Wisdom')
      .get('.new-theme').should('have.attr', 'href').should('contain', '/')
  })
})