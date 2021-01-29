const mongoose = require('mongoose')
require('dotenv').config()

async function connect() {
    try {
        await mongoose.connect( process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('connect successfully!')
    }catch(e){
        console.log('connect failure!')
    }
}

module.exports = { connect }

