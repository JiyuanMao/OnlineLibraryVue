describe('The Home Page Test', function () {
  it('successfully loads', function () {
    cy.visit('/') // change URL to match your dev URL
  });

  it('home page h1 text', () => {
    cy.get('.display-3')
      .should('have.text', 'My Online Library')
  });

  it('nav online library link', () => {
    cy.get('.active')
      .should('have.text', 'Online Library')
  });

  // it('nav-item counts', () => {
  //     cy.get('.nav-item')
  //         .expect.have.callCount(3)
  // })
  it('start btn', () => {
    cy.get('a[name=homeBtn]')
      .contains('Start your travel')
  });

  it('click btn', () => {
    cy.get('a[name=homeBtn]')
      .click()
  });

  it('check go to books', () => {
    cy
      .get('caption')
      .contains('Books')
  });
});
