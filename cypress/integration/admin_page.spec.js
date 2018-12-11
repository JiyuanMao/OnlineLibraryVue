describe('The Admin Page Test', function () {
  it('Go Admin Page without login', function () {
    cy.visit('/#/Admin') // change URL to match your dev URL
  })

  it('Redirect to home', function () {
    cy.server()
    cy.route({
      method: 'POST',
      url: '/#/users/login',
      response: {
        data: [{
          username: 'test',
          password: '123',
          usertype: 'admin'
        }]
      }
    })
    cy.route({
      method: 'GET',
      url: '/#/books',
      response: [
        {
          'likes': 4,
          '_id': '5c0ba01682b4d61bb00e1001',
          'name': 'Digital Portrait Photography For Dummies',
          'author': 'Doug Sahlin',
          'publisher': 'John Wiley & Sons',
          'category': 'Photography',
          '__v': 0
        },
        {
          'likes': 0,
          '_id': '5c0ba04b82b4d61bb00e1002',
          'name': 'Foundations for Analytics with Python',
          'author': 'Brownley, Clinton W.',
          'publisher': 'Southeast University Press',
          'category': 'Computing Science',
          '__v': 0
        },
        {
          'likes': 0,
          '_id': '5c0ba05282b4d61bb00e1003',
          'name': 'Multi-objective Decision Analysis',
          'author': 'Brownley, Clinton W.',
          'publisher': 'Business Expert Pr',
          'category': 'software engineering',
          '__v': 0
        },
        {
          'likes': 0,
          '_id': '5c0e41cc09536e51bcd8c91d',
          'name': 'Building Web Sites All-in-One Desk Reference For Dummies',
          'author': 'Doug Sahlin',
          'publisher': 'John Wiley & Sons',
          'category': 'Computing Science',
          '__v': 0
        }
      ]
    })
  })

  it('Do Admin Login', function () {
    cy.wait(500)
    cy.visit('/#/login') // change URL to match your dev URL
    cy.get('input[type=text]:visible').type('zoe')
    cy.get('input[type=password]:visible').type('123456')
    cy.get('button[type=submit]:visible').click()
  })

})
