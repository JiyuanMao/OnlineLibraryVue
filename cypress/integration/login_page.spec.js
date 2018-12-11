describe('The Login and Register Page Test', function () {
  it('successfully loads', function () {
    cy.visit('/#/login') // change URL to match your dev URL
  })

  it('login page card', () => {
    cy.get('.card-header')
  })

  it('check login button', () => {
    cy.get('.btn-success')
      .contains('Submit')
  })

  it('click to register', () => {
    cy.get('[aria-selected="false"] ')
      .click()
  })

  it('check login and register visible', () => {
    cy.get('.btn-primary')
      .should('be.visible')
      .contains('Register')
    cy.get(('.btn-success'))
      .should('not.be.visible')
      .contains('Submit')
  })

  it('back to login', () => {
    cy.get('[aria-selected="false"] ')
      .click()
  })

  it('input the username and password', () => {
    cy.get('input[type=text]:visible').type('justin')
    cy.get('input[type=password]:visible').type('123456')
    cy.get('button[type=submit]:visible').click()
  })

})
