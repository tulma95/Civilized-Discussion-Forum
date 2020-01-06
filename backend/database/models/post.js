'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    thread_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    image: DataTypes.BLOB,
    content: DataTypes.STRING
  }, {});
  Post.associate = function (models) {
    // associations can be defined here

    Post.belongsTo(models.Thread, {
      foreignKey: 'thread_id',
      as: 'thread',
    })


    Post.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user',
    })

  };
  return Post;
};