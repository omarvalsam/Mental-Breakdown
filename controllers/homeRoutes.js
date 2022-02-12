const sequelize = require("../config/connection");
const { Task, User } = require("../models");
const router = require("express").Router();

router.get("/", (req, res) => {
  console.log(req.session);
  Task.findAll({
    attributes: ["task_id", "title", "task_text", "created_at"],
    include: [
      {
        model: User,
        attributes: ["username", "email"],
      },
    ],
  })
    .then((dbTaskData) => {
      const tasks = dbTaskData.map((task) => task.get({ plain: true }));
      res.sendFile(path.join(__dirname + "/Main-login.html"));
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// =================================================================
// This code only will be used if we decide that
// we want a homepage that redirects us to the login page main login.html
// router.get("/login", (req, res) => {
//   if (req.session.loggedin) {
//     res.redirect("/");
//     return;
//   }

//   res.render("login");
// });

// ======================         ======================
// This code was written for single posts in mind,
// will un comment when page is built with handle bars
// router.get("/Task/:id", (req, res) => {
//   Task.findOne({
//     where: { id: req.params.taskid },
//     attributes: ["task_id", "title", "task_text", "created_at"],
//     include: [
//       {
//         model: User,
//         attribute: ["username", "email"],
//       },
//     ],
//   })
//     .then((dbTaskData) => {
//       if (!dbTaskData) {
//         res
//           .status(404)
//           .json({ message: "No Task found with this id, QUE LOSER" });
//         return;
//       }
//       const task = dbtaskData.get({ plain: true });

//       res.render("single-task", { post });
//     })
//     .catch((err) => {
//       consoel.log(err);
//       res.status(500).json(err);
//     });
// });

module.exports = router;
