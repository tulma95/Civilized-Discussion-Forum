'use strict'
module.exports = (sequelize, DataTypes) => {
  const Thread = sequelize.define(
    'Thread',
    {
      title: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
      category: DataTypes.STRING,
      imageUrl: DataTypes.STRING,
      content: {
        type: DataTypes.STRING,
        validate: {
          len: {
            args: [15, 250],
            msg: 'Content length must be between 15 and 250 character'
          }
        }
      }
    },
    {}
  )

  Thread.associate = function(models) {
    Thread.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user'
    })
    Thread.hasMany(models.Post, {
      foreignKey: 'thread_id',
      as: 'posts',
      onDelete: 'CASCADE'
    })
  }
  return Thread
}
