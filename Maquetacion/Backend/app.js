'use strict'

//cargar modulos de node para crear servidor

var express = require('express');
var bodyParse = require('body-parser');

//ejecutar express (http)
var app = express();
//cargar ficheros rutas

//middlewares
app.use(bodyParse.urlencoded({extended:false}));
app.use(bodyParse.json());
//CORS

//aniadir prefijo a rutas

//ruta de prueba para el api rest

/*
app.post('/probando',function (req,res) {

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