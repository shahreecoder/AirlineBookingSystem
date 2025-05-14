const express = require('express');
const router = express.Router();
const {airplaneController} = require('../../../controllers/index');

// /api/v1/airplane   POST
router.post('/',airplaneController.createAirplane); 


module.exports = router;