'use strict'

var express = require('express');

var ArticleController = require('../controllers/article');

var route = express.Router();

route.post('/datos-curso',ArticleController.datosCurso);
route.get('/test-de-controlador',ArticleController.test);

module.exports = route;