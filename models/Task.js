const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Task extends Model {} //originally 'comment.js's - USE THIS AS YOUR MODEL

Task.init(
  {
    task_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    task_text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    created_by: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    // post_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "post",
    //     key: "id",
    //   },
    // },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "task",
  }
);

module.exports = Task;
