'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Threads',
      [
        {
          title: 'Kiinnostava keskustelu',
          content: 'Mun eka peli oli crast bandicoot. entä teillä?',
          category: 'videogames',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Eka videopelinne',
          content: 'Mun eka peli oli crast bandicoot. entä teillä?',
          category: 'videogames',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Eka biisi minkä muistatte',
          content: 'akcentin kylie ofc <333',
          category: 'music',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Threads', null, {})
  }
}
