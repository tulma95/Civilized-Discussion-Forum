'use strict'
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          args: true,
          msg: 'Username is already in use',
          fields: 'username'
        }
      },
      passwordhash: DataTypes.STRING
    },
    {
      indexes: [
        {
          unique: true,
          fields: ['username']
        }
      ]
    }
  )

  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Thread, {
      foreignKey: 'user_id',
      as: 'threads',
      onDelete: 'CASCADE'
    })
    User.hasMany(models.Post, {
      foreignKey: 'user_id',
      as: 'posts',
      onDelete: 'CASCADE'
    })
  }
  return User
}
