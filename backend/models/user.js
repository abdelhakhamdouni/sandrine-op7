'use strict';

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    email: DataTypes.STRING,
    nom: DataTypes.STRING,
    prenom: DataTypes.STRING,
    poste: DataTypes.STRING,
    password: DataTypes.STRING,
    photo: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN
  }, { 

  });

    /*classMethods: {
      associate: function(models) {
         // define association here
      models.User.hasMany(models.Message);

      models.User.hasMany(models.Commentaire);
      }
    }
  });*/
  return User;
};