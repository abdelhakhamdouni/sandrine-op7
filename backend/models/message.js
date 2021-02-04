'use strict';

module.exports = (sequelize, DataTypes) => {
  var Message = sequelize.define('Message', {
   	  message: DataTypes.STRING,
    	attachement: DataTypes.STRING,
      likes: DataTypes.INTEGER
  });

  Message.associate = function(models) {
    Message.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    })
    Message.hasMany(models.Commentaire, {
      foreignKey: 'messageId',
      as: 'comments'
    })
  }
  
  return Message;
};