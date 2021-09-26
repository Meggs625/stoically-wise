
Cypress.Commands.add('quoteLoad', () => {
  cy.visit('http://localhost:3000')
    .get('input[name="Theme"]')
    .type('flowers')
    .get('.enter-btn').click()

  cy.intercept('https://stoic-server.herokuapp.com/random', {
    body: [{
      id: 1,
      body: 'The art of life is more like the wrestler\'s art than the dancer\'s.',
      author: 'Marcus Aurelius',
      keywords: ['life', 'art', 'flowers']
    }]
  })

  // cy.intercept(`https://pixabay.com/api/?key=23483948-a9995475fd38e7480dc10e8df&q=flowers&image_type=photo`, {
  //   hits: [{
  //     "id": 195893,
  //     "pageURL": "https://pixabay.com/en/blossom-bloom-flower-195893/",
  //     "type": "photo",
  //     "tags": "blossom, bloom, flower",
  //     "previewURL": "https://cdn.pixabay.com/photo/2013/10/15/09/12/flower-195893_150.jpg",
  //     "previewWidth": 150,
  //     "previewHeight": 84,
  //     "webformatURL": "https://pixabay.com/get/35bbf209e13e39d2_640.jpg",
  //     "webformatWidth": 640,
  //     "webformatHeight": 360,
  //     "largeImageURL": "https://pixabay.com/get/ed6a99fd0a76647_1280.jpg",
  //     "fullHDURL": "https://pixabay.com/get/ed6a9369fd0a76647_1920.jpg",
  //     "imageURL": "https://pixabay.com/get/ed6a9364a9fd0a76647.jpg",
  //     "imageWidth": 4000,
  //     "imageHeight": 2250,
  //     "imageSize": 4731420,
  //     "views": 7671,
  //     "downloads": 6439,
  //     "likes": 5,
  //     "comments": 2,
  //     "user_id": 48777,
  //     "user": "Josch13",
  //     "userImageURL": "https://cdn.pixabay.com/user/2013/11/05/02-10-23-764_250x250.jpg",
  //   }]
  // })
})

// Cypress.Commands.add('addFavorite', () => {
//   cy.get('.plus-sign').should('be.visible').click()
//     .get('.view-favorites').click()
// })

// ***********************************************

// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
