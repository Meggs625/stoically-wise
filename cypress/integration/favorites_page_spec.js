describe('Favorites Page', () => {
  beforeEach(() => {
    cy.quoteLoad()
    cy.addFavorite()
  })

  it('Should include have an updated URL', () => {
    cy.url().should('include', '/favorites')
  })

  it('Should display a favorites card', () => {
    cy.get('.card').should('be.visible')
  })

  it('Should include the quote that was saved', () => {
    cy.get('.saved-quote').should('contain', 'The art of life')
  })
})