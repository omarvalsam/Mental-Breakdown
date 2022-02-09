const router = require("express").Router();
const sequelize = require('../../config/connection');
const { Task, User } = require('../../models/Task'); 

// get all tasks
router.get("/", (req, res) => {
  console.log("======================");
  Task.findAll({
<<<<<<< HEAD
    attributes: [ 
      'Task_id',
      'title',
      'Task_text',
      'user_id',
      'post_id'
      [sequelize.literal('(SELECT COUNT(*) FROM mental_breakdowns')] //!!double check this!!
    ],
    // order: [['created_at', 'DESC']],
    include: [
      {
        model: 'Task',
        attributes: ['Task_id', 'title', 'Task_text', 'user_id', 'post_id' ], // remove user_id since username is down below?
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
=======
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
>>>>>>> 48805c67f9db99b97541582a113b741cdaa7e8d7
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
    attributes: [ //will change depending on front end structures
      'Task_id',
      // 'title',
      // 'Task_text',
      // 'user_id',
      // 'post_id'
      [sequelize.literal('(SELECT COUNT(*) FROM mental_breakdowns WHERE Task.id = mental_breakdowns.Task_id)'), 'vote_count']
    ],
    include: [
      {
        model: Task,
        attributes: ["id", "Task_text", "Task_id", "user_id", "created_at"],
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

// router.Task('/', (req, res) => {
//   // expects {title: 'Taskmaster goes public!', Task_url: 'https://taskmaster.com/press', user_id: 1}
//   Task.create({
//     title: req.body.title,
//     Task_url: req.body.Task_url,
//     user_id: req.body.user_id
//   })
//     .then(dbTaskData => res.json(dbTaskData))
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// router.put('/upvote', (req, res) => {
//   // custom static method created in models/Task.js
//   Task.upvote(req.body, { Vote, Task, User })
//     .then(updatedVoteData => res.json(updatedVoteData))
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// router.put('/:id', (req, res) => {
//   Task.update(
//     {
//       title: req.body.title
//     },
//     {
//       where: {
//         id: req.params.id
//       }
//     }
//   )
//     .then(dbTaskData => {
//       if (!dbTaskData) {
//         res.status(404).json({ message: 'No Task found with this id' });
//         return;
//       }
//       res.json(dbTaskData);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

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
