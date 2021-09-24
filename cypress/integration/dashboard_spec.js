
describe('Landing Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Should navigate to the landing page and the user should see a Navbar', () => {
    cy.get('.nav-bar').should('be.visible')
  })

  it('Should display the company name and logo in the Navbar', () => {
    cy.get('.brand-name').should('contain', 'Daily Wisdom')
      .get('.logo').should('be.visible')
  })

  it('Should have a welcome and instruction', () => {
    cy.get('.welcome-header > h1').should('contain', 'Welcome')
      .get('.welcome-header > h2').should('contain', 'Choose a theme')
  })

  it('Should have an input that accepts a text input ', () => {
    cy.get('input[name="Theme"]')
      .type('butterflies')
      .should('have.value', 'butterflies')
  })

  it('Should switch view to the quote page with a random quote after a theme is entered and "Enter" has been select', () => {
    cy.get('input[name="Theme"]')
    .type('butterflies')
    .should('have.value', 'butterflies')
    .get('.enter-btn').click()
    .get('.new-theme-link').click()
    .get('.previous-theme-btn').should('contain', 'butterflies')
  })

})