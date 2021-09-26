describe('Favorites Page', () => {
  beforeEach(() => {
    cy.quoteLoad()
    .get('.plus-sign').should('be.visible').click()
    .get('.view-favorites').click()
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

  it('Should display the saved image', () => {
    cy.get('.saved-img').should('have.attr', 'src')
  })

  it('Should display the author of the quote', () => {
    cy.get('.saved-author').should('contain', 'Marcus Aurelius')
  })

  it('Should have a button to remove the quote from the saved quotes', () => [
    cy.get('.delete-icon').should('be.visible')
  ])

  it('Should no longer display the card after clicking the delete button', () => {
    cy.get('.delete-icon').click()
      .get('.card').should(('not.exist'))
  })

  it('Should display a message if there are no favorites to display', () => {
    cy.get('.delete-icon').click()
      .get('.no-favorites').should('be.visible').should('contain', 'Nothing saved yet')
  })

  it('Should return to the home page after clicking the logo', () => {
    cy.get('.home-link').click()
      .get('.welcome-header').should('be.visible')
  })

  it('Should display the recently used theme in the lower button', () => [
    cy.get('.previous-theme-btn').should('contin', 'flowers')
  ])
})