const express = require('express');
const router = express.Router();
const {body,validationResult,check} = require('express-validator');

router.get('/user/signin',((req, res) => {
  res.render('users/signin.hbs');
}));

router.get('/user/signup',((req, res) => {
    res.render('users/signup.hbs');
}))

router.post('/user/signup',
    [
        check('name')
                   .isLength({min:2}).withMessage('must be at least 2 chars long'),
        check('password')
                    .isLength({min:5}).withMessage('must be at least 5 chars long'),
        check('email')
                    .isEmail().normalizeEmail().withMessage('Thas it not an value email'),
        check('password')
            .equals('confirm_password').withMessage('The password didnt coinciden')
    ],((req, res) => {
        const {name, email, password, confirm_password} = req.body;
        let errorsArray = [];
        const errores = validationResult(req);
        errores.array().forEach(obj =>{
            errorsArray.push({text: obj.msg});
        })
        if(!errores.isEmpty()){
            res.render('users/signup',{errorsArray,name, email, password, confirm_password});
        }else{
            res.send('ok');
        }

}));

module.exports = router;
