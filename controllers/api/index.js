const router = require('express').Router();
const userRoutes = require('./user-routes');
const boardRoutes = require('./board-routes');

router.use('/user', userRoutes);
router.use('/board', boardRoutes);

module.exports = router;
