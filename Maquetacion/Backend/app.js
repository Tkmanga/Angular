'use strict'

//cargar modulos de node para crear servidor
var express = require('express');
var bodyParse = require('body-parser');

//ejecutar express (http)
var app = express();

//cargar ficheros rutas
var article_routes = require('./routes/article');
var auth_routes = require('./routes/auth');

//middlewares
app.use(bodyParse.urlencoded({extended:false}));
app.use(bodyParse.json());

//CORS
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
//aniadir prefijo a rutas
app.use('/api',article_routes);
app.use('/auth',auth_routes);
//ruta de prueba para el api rest

/*
app.get('/probando',function (req,res) {

    var mensaje = req.body.hola;
    return res.status(200).send(
        {curso:"master en fw js ",
            autor:"vitor robles web",
            url:"victorroblesweb.es",
            mensaje
        }
    );
});
*/

//exportar modulos
module.exports = app;