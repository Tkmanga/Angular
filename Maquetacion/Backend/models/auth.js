'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var AuthSchema = Schema({
    user: String,
    email: String,
    password: String
});

module.exports = mongoose.model('Auth', AuthSchema); 