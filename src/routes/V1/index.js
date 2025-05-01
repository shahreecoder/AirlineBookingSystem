const express = require('express');
const infoRoutes = require('./info');

const router = express.Router();

router.use('/info', infoRoutes);

module.exports = router;