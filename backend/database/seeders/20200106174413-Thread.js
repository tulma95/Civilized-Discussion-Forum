'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Threads', [{
      user_id: 1,
      title: 'Kiinnostava keskustelu',
      category: 'DataTypes.STRING',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Threads', null, {});
  }
};
