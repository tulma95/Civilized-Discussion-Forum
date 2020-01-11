'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Threads', [{
      user_id: 1,
      title: 'Kiinnostava keskustelu',
      category: 'videogames',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 1,
      title: 'Koulussa on kivaa',
      category: 'videogames',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 1,
      title: 'Kolmas keskustelu',
      category: 'music',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Threads', null, {});
  }
};
