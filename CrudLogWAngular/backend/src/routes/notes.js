const express = require('express');
const router = express.Router();
router.get('/notes',((req, res) => {
    res.send('notas de la base de datos!');
}));

module.exports = router;
