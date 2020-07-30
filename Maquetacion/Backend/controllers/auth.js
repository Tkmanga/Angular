'use strict'

var controller = {
    test: (req,res) => {
        return res.status(200).send({
            message: 'soy la accion de test del controlador auth'
        })
    }
};

module.exports  = controller;
