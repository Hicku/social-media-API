const router = require('express').Router();

const userRoutes = require('./userR');
const thoughtRoutes = require('./thoughtR');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;