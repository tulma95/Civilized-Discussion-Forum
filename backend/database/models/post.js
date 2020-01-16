'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    thread_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
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