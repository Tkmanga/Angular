'use strict'

var express = require('express');
var ArticleController = require('../controllers/article');
var route = express.Router();

var multipart = require('connect-multiparty');

var md_upload = multipart({uploadDir:'./upload/articles'});

//rutas de prueba
route.post('/datos-curso',ArticleController.datosCurso);
route.get('/test-de-controlador',ArticleController.test);
//rutas utiles
route.post('/save',ArticleController.save);
route.get('/articles/:last?',ArticleController.getArticles);
route.get('/article/:id',ArticleController.getArticle);
route.put('/article/:id',ArticleController.update);
route.delete('/article/:id',ArticleController.delete);
route.post('/upload-image/:id?',md_upload,ArticleController.upload);
route.get('/get-image/:image',ArticleController.getImage);
route.get('/search/:search',ArticleController.search);

module.exports = route;