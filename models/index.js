const User = require("./User");
const Task = require("./Task");
const junctionTable = require("./junctionTable");
const Project = require("./Project");

Task.belongsToMany(User, {
  through: junctionTable,
  foreignKey: "task_id",
});

User.belongsToMany(Task, {
  through: junctionTable,
  foreignKey: "user_id",
});

module.exports = { User, Task, junctionTable, Project };
