const mongoose = require('mongoose');
const {Schema} = mongoose;

const noteSchema = new Schema({
    title: {type:String, require:true },
    description: {type:String, require: true},
    date:{type: Date, default: Date.now},
    user: {tye:String}
});

module.exports = mongoose.model('Note', noteSchema);


