const User = require("./User");
const Task = require("./Task");

Task.belongsToMany(User, {
  foreignKey: "created_by",
});

User.hasMany(Task, {
  foreignKey: "id",
});

module.exports = { User, Task };
