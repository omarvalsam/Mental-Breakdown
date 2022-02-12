const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class junctionTable extends Model {}

junctionTable.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    task_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "junctionTable",
  }
);

module.exports = junctionTable;
