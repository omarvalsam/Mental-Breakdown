const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Task, User } = require("../../models/Task");

// get all tasks
router.get("/", (req, res) => {
  console.log("======================");
  Task.findAll({
    // attributes: [
    //   //will change depending on front end structures
    //   "id",
    //   "Task_url",
    //   "title",
    //   "created_at",
    //   [
    //     sequelize.literal(
    //       "(SELECT COUNT(*) FROM vote WHERE Task.id = vote.Task_id)"
    //     ),
    //     "vote_count",
    //   ],
    // ],
    // order: [["created_at", "DESC"]],
    // include: [
    //   {
    //     model: Task,
    //     attributes: ["id", "Task_text", "Task_id", "user_id", "created_at"],
    //     include: {
    //       model: User,
    //       attributes: ["username"],
    //     },
    //   },
    //   {
    //     model: User,
    //     attributes: ["username"],
    //   },
    // ],
  })
    .then((dbTaskData) => res.json(dbTaskData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//Get one task
router.get("/:id", (req, res) => {
  Task.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      //will change depending on front end structures
      "Task_id",
      // 'title',
      // 'Task_text',
      // 'user_id',
      // 'post_id'
      [
        sequelize.literal(
          "(SELECT COUNT(*) FROM mental_breakdowns WHERE Task.id = mental_breakdowns.Task_id)"
        ),
      ],
    ],
    include: [
      {
        model: Task,
        attributes: ["title", "Task_text", "Task_id", "created_by"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbTaskData) => {
      if (!dbTaskData) {
        res.status(404).json({ message: "No Task found with this id" });
        return;
      }
      res.json(dbTaskData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  Task.create({
    title: req.body.title,
    task_text: req.body.task_text,
  })
    .then((dbTaskData) => res.json(dbTaskData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  Task.update(
    {
      title: req.body.title,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbTaskData) => {
      if (!dbTaskData) {
        res.status(404).json({ message: "No Task found with this id" });
        return;
      }
      res.json(dbTaskData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  Task.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbTaskData) => {
      //dbTaskData from schema? - will have to name data this or update when needed
      if (!dbTaskData) {
        res.status(404).json({ message: "No Task found with this id" });
        return;
      }
      res.json(dbTaskData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
