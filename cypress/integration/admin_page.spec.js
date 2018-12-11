describe('The Admin Page Test', function () {
  it('Go Admin Page without login', function () {
    cy.visit('/#/Admin') // change URL to match your dev URL
  })

  it('Redirect to home', function () {
    cy.url()
  })

  it('Do Admin Login', function () {
    cy.wait(500)
    cy.visit('/#/login') // change URL to match your dev URL
    cy.get('input[type=text]:visible').type('zoe')
    cy.get('input[type=password]:visible').type('123456')
    cy.get('button[type=submit]:visible').click()
  })

})
