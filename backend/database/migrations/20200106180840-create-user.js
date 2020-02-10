'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'Users',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        username: {
          allowNull: false,
          type: Sequelize.STRING,
          unique: 'actions_unique'
        },
        passwordhash: {
          allowNull: false,
          type: Sequelize.STRING
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      },
      {
        uniqueKeys: {
          actions_unique: {
            fields: ['username']
          }
        }
      }
    )
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users')
  }
}
