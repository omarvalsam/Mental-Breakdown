// models define the data

//Models are the essence of Sequelize. A model is an abstraction that represents a table in your database. In Sequelize, it is a class that extends Model.

// The model tells Sequelize several things about the entity it represents, 
// such as the name of the table in the database and which columns it has (and their data types).

// A model in Sequelize has a name. This name does not have to be the same name of the table it represents in the database. 
// Usually, models have singular names (such as User) while tables have pluralized names (such as Users), 
// although this is fully configurable.

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Notification extends Model {}

Notification.init({
  
})