const sequelize = require("../config/connection");
const { Task, User } = require("../models");
const router = require("express").Router();

router.get("/", (req, res) => {
  // console.log(req.session);
  res.render("homepage");
});

// =================================================================
// This code only will be used if we decide that
<<<<<<< HEAD
// we want a homepage that redirects us to the login page main login.html | redirects to login
// router.get("/login", (req, res) => {
//   if (req.session.loggedin) {
//     res.redirect("/");
//     return;
//   }
=======
// we want a homepage that redirects us to the login page main login.html
router.get("/login", (req, res) => {
  res.render("login");
  // if (req.session.loggedin) {
  //   res.redirect("/");
  //   return;
  // }
});
>>>>>>> d9ddf38d99b9f7a1617d660dcfc06e8ac84c89d3

// this route is intended to be used for the user interface, allowing for the tasks to be mapped out to user dashboard
router.get("/userinterface", (req, res) => {
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
      res.render("projects-page", { tasks });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// ======================         ======================
// This code was written for single posts in mind,
// will un comment when page is built with handle bars
<<<<<<< HEAD
<<<<<<< HEAD
// router.get("/Task/:id", (req, res) => {
//   Task.findOne({
//     where: { id: req.params.taskid },
//     attributes: ["task_id", "title", "task_text", "created_at"], | redirects to Sara's two 
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
=======
router.get("/Task/:id", (req, res) => {
  Task.findOne({
    where: { id: req.params.taskid },
    attributes: ["task_id", "title", "task_text", "created_at"],
=======
router.get("/Task/:id", (req, res) => {
  Task.findOne({
    where: { id: req.params.taskid },
    attributes: ["task_id", "title", "task_text", "created_at"], 
>>>>>>> cm-backend
    include: [
      {
        model: User,
        attribute: ["username", "email"],
      },
    ],
  })
    .then((dbTaskData) => {
      if (!dbTaskData) {
        res
          .status(404)
          .json({ message: "No Task found with this id, QUE LOSER" });
        return;
      }
<<<<<<< HEAD
      const task = dbTaskData.get({ plain: true });
>>>>>>> d9ddf38d99b9f7a1617d660dcfc06e8ac84c89d3

      res.render("single-task", { task });
=======
      const task = dbtaskData.get({ plain: true });

      res.render("single-task", { post });
>>>>>>> cm-backend
    })
    .catch((err) => {
      consoel.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
