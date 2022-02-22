const User = require("./User");
const Task = require("./Task");
<<<<<<< HEAD
const JunctionTable = require("./JunctionTable");
=======
const junctionTable = require("./junctionTable");
>>>>>>> d49073e8df9176a81b4aa5a1bf35995008f56bcb
const Project = require("./Project");

Task.belongsToMany(User, {
  through: JunctionTable,
  foreignKey: "task_id",
});

User.belongsToMany(Task, {
  through: JunctionTable,
  foreignKey: "user_id",
});

<<<<<<< HEAD
module.exports = { User, Task, JunctionTable, Project };
=======
module.exports = { User, Task, junctionTable, Project };
>>>>>>> d49073e8df9176a81b4aa5a1bf35995008f56bcb
