const {Router} = require('express');

const router = Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');

router.get('/api',(req,res) => res.send('hello worrld'));

router.post('/api/signup',async(req,res) => {
    const {email, password} = req.body;
    const newUser = new User ({email, password});

    await newUser.save();
    const token  = jwt.sign({_id: newUser._id},'secretkey');
    console.log(newUser);
    res.status(200).json({token});

});
router.post('/api/signin',async(req,res) => {
    const {email, password} = req.body;

    const user = await User.findOne({email});
    if(!user){
        return res.status(401).send('error al recibir datos');
    }
    if(user.password !== password){

        return res.status(401).send('error al recibir datos');
    }
    const token = jwt.sign({_id: user._id}, 'secretkey');
    return res.status(200).json(token);

});
router.get('/api/task', (req,res)=>{
    res.json([
        {
            _id: 1,
            name: 'task one',
            description: 'loremi ',

        },
        {
            _id: 2,
            name: 'task two',
            description: 'loremi ',

        },
        {
            _id: 3,
            name: 'task three',
            description: 'loremi ',

        }
    ])
})
router.get('/api/private-task',veryyToken,(req,res)=>{
    res.json([
        {
            _id: 1,
            name: 'task one',
            description: 'loremi ',

        },
        {
            _id: 2,
            name: 'task two',
            description: 'loremi ',

        },
        {
            _id: 3,
            name: 'task three',
            description: 'loremi ',

        }
    ])
})
module.exports = router;

function veryyToken(req,res,next){
    if(!req.headers.authorization){
        return res.status(401).send('acceso no autorizado');
    }

    const token = req.headers.authorization.split(' ')[1];

    if(token=='null'){
        return res.status(401).send('acceso no autorizado');
    }
    const payload = jwt.verify(token,'secretkey');
    req.userId = payload._id;
    next();

}