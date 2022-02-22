const User = require("./User");
const Task = require("./Task");
const JunctionTable = require("./JunctionTable");
const Project = require("./Project");

Task.belongsToMany(User, {
  through: JunctionTable,
  foreignKey: "task_id",
});

User.belongsToMany(Task, {
  through: JunctionTable,
  foreignKey: "user_id",
});

module.exports = { User, Task, JunctionTable, Project };
