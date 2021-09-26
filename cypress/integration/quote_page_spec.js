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
      .get('.view-favorites').should('have.attr', 'href').should('contain', '/favorites')
  })

  it('Should display a quote', () => {
    cy.get('.quote').should('contain', 'The art of life')
  })

  it('Should include a button to add to the favorites list', () => {
    cy.get('.plus-sign').should('be.visible')
  })

  it('Should allow the favorites button to be clicked', () => {
    cy.get('.plus-sign').should('be.visible').click()
    })
})