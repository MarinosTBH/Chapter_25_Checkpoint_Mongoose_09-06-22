const mongoose = require('mongoose')
require('dotenv').config()

//Connect to DB
function connected(async) {
    return (
        mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/Mongoose',
            { useNewUrlParser: true, useUnifiedTopology: true } //hedhi f checkpoint w manish 3aref aleh 
        )
            .then(() => console.log('Connected to DB'))
            .catch(e => console.log(e))
    )
}
    


module.exports = connected