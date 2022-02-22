const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Project extends Model {}

Project.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
      // collaborators: {
      //   type: DataTypes.INTEGER,
      //   references: {
      //     model: "user",
      //     key: "username",
      //   },
      // },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "project",
  }
);

module.exports = Project;
