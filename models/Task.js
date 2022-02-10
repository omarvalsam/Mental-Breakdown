const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Task extends Model {} //originally 'comment.js's - USE THIS AS YOUR MODEL

Task.init(
  {
    Task_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Task_text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
<<<<<<< HEAD
        len: [1]
      }
=======
        len: [1],
      },
>>>>>>> develop
    },
    // user_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
<<<<<<< HEAD
    //     model: 'user',
    //     key: 'id'
    //   }
=======
    //     model: "user",
    //     key: "id",
    //   },
>>>>>>> develop
    // },
    // post_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
<<<<<<< HEAD
    //     model: 'post',
    //     key: 'id'
    //   }
    // }
=======
    //     model: "post",
    //     key: "id",
    //   },
    // },
>>>>>>> develop
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "task",
  }
);

module.exports = Task;
