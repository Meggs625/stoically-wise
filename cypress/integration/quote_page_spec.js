describe('Quote Page', () => {
  beforeEach(() => {
    cy.quoteLoad()
  })

  it('Should update the URL', () => {
    cy.url().should('include', 'quote')
  })
})