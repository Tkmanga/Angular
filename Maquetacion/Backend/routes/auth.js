'use strict'

var express = require('express');
var AuthController = require('../controllers/auth');
var router = express.Router();

router.get('/test',AuthController.test());
module.exports = router;