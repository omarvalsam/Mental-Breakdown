const router = require('express').Router();

// const userRoutes = require('./user-routes.js');
// const postRoutes = require('./post-routes');
const taskRoutes = require('./task-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/tasks', taskRoutes);

module.exports = router;
