'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = {
  "username": "op7test",
  "password": "Moh1med2010",
  "database": "database_development_groupomania",
  "host": "127.0.0.1",
  "dialect": "mysql"
};
const db = {};

let sequelize;
  sequelize = new Sequelize(config.database, config.username, config.password, config);

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
sequelize.sync();

db.sequelize = sequelize;
db.Sequelize = Sequelize;


module.exports = db;
