const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const passport = require("passport");

class User extends Model {}

//Defining our table collumns and configuration

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6],
      },
    },
  },
  {
    hooks: {
      async beforeCreate(newUserData) {
        newUserData.password = await passport.hash(newUserData.password, 10);
        return newUserData;
      },

      async beforeUpdate(updatedUserData) {
        updatedUserData.password = await passport.hash(
          updatedUserData.password,
          10
        );
        return updatedUserData;
      },
    },

    sequelize,

    timestamps: false,
    FreezeTableName: true,
    underscored: true,
    tableName: "user",
    modelName: "user",
  }
);

module.exports = User;
