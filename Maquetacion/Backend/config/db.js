const mongoose = require('mongoose');
const dbURL = require('./properties').DB;
module.exports = () =>  {
    mongoose.connect(dbURL,{userNewUrlParser: true})
        .then(() => console.log(`mongo connected on ${dbURL}`))
        .catch(err => console.log(`Connection has error ${err}`))

    process.on('SIGINIT',() => {
        mongoose.connection.close(() => {
            console.log('mongo is disconected');
            process.exit(0);
        })
    })
}