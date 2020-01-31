describe('Front page ', function() {
  it('welcome text is shown', function() {
    cy.visit('http://localhost:3000')
    cy.contains('Welcome to the civilized discussion forum.')
  })

  it('thread category videogames can be clicked', function() {
    cy.visit('http://localhost:3000')
    cy.get('[data-cy=videogames]').click()
    cy.contains('Create thread')
  })
})
