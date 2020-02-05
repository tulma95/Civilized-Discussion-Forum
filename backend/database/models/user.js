'use strict'
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      unique: {
        args: true,
        msg: 'Username is already in use'
      }
    },
    passwordhash: DataTypes.STRING
  })
  ;(async () => {
    await sequelize.sync({ force: true })
    // Code here
  })()

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
