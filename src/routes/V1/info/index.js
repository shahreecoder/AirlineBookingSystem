const express = require('express');
const router = express.Router();
const {infoController} = require('../../../controllers/index');


router.get('/',infoController.info); 

module.exports = router;