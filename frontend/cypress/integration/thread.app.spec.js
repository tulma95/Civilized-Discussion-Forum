describe('From front page ', function() {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3003/api/testing/reset')
    const thread = {
      title: 'Top 5 games 2020',
      content: '1. zelda 2. wow 3. dota 4. gta 5. rally',
      category: 'videogames',
      user_id: 1,
      image: ''
    }
    cy.request('POST', 'http://localhost:3003/api/threads/videogames', thread)
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

  it.only('new post can be added', function() {
    cy.get('[data-cy=videogames]').click()
    cy.get(`[data-cy='Top 5 games 2020']`).click()
    cy.get('[data-cy=textArea]').type('Must be the new warcraft 3 game')
    cy.get('[data-cy=postSubmit]').click()
  })
})
