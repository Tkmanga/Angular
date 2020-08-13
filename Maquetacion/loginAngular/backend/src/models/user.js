const {Schema, model} = require('mongoose');
const userSchema = new Schema({
    email:String,
    password: String
},{
    timestamp: true
});

module.exports =  model('User', userSchema);
