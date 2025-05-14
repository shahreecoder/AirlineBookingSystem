const express = require('express');
const infoRoutes = require('./info');
const airplaneRotes = require('./airplane');

const router = express.Router();

router.use('/airplane', airplaneRotes);

router.use('/info', infoRoutes);

module.exports = router;