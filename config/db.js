require('dotenv').config()
const mongoose = require('mongoose')

const dbConnect = () => {
    const DB_URI = process.env.DB_URI

    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('DATABASE CONNECTED')
    }).catch((err) => {
        console.error(err)
        console.log(err)
    })
}

module.exports = { dbConnect }