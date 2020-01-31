describe('From front page ', function() {
  beforeEach(function() {
    const thread = {}
    // cy.request('POST', 'http://localhost:3003/api/threads', thread)
    cy.visit('http://localhost:3000')
  })

  it('welcome text is shown', function() {
    cy.contains('Welcome to the civilized discussion forum.')
  })

  it('new thread can be added', function() {
    cy.get('[data-cy=videogames]').click()
    cy.get('[data-cy=title]').type('What is your favorite game?')
    cy.get('[data-cy=textArea]').type('I like to play world of warcraft')
    cy.get('[data-cy=threadSubmit]').click()
    cy.contains('What is your favorite game?')
    cy.contains('I like to play world of warcraft')
  })

  it('new post can be added', function() {
    cy.get('[data-cy=videogames]').click()
  })
})
