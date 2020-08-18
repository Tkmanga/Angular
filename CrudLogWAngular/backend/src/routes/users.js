const express = require('express');
const router = express.Router();

router.get('/user/signin',((req, res) => {
  res.send('Ingresando a la aplicacion');
}));

router.get('/user/signup',((req, res) => {
    res.send('Formulario de autenticacion');
}))
module.exports = router;
