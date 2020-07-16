'use strict'

var controller = {
    datosCurso: (req,res) =>{

    var mensaje = req.body.hola;
    return res.status(200).send(
        {curso:"master en fw js ",
            autor:"vitor robles web",
            url:"victorroblesweb.es",
            mensaje
        });
    },
    test: (req, res)=>{
        return res.status(200).send({
            message: 'soy la accion test de mi controlador de articulos '
        });
    }
}; //end controller

module.exports = controller;

