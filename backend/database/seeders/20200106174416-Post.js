'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Posts', [{
      thread_id: 1,
      user_id: 1,
      content: "Tosi kiinnostava aihe :)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      thread_id: 1,
      user_id: 1,
      content: "Puhunko mä yksin täällä? :(",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      thread_id: 1,
      user_id: 1,
      content: "haha joo :D",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Posts', null, {});
  }
};
