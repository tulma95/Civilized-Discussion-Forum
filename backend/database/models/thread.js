'use strict';
module.exports = (sequelize, DataTypes) => {
  const Thread = sequelize.define('Thread', {
    title: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    category: DataTypes.STRING
  }, {});
  Thread.associate = function (models) {
    Thread.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user',
    })
    Thread.hasMany(models.Post, {
      foreignKey: 'thread_id',
      as: 'posts',
      onDelete: 'CASCADE',
    });
  };
  return Thread;
};