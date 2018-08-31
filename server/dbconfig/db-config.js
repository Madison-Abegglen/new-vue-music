let mongoose = require('mongoose')
const connectionString = 'mongodb://studentOne:student1@ds020208.mlab.com:20208/new-vue-music'
let connection = mongoose.connection


mongoose.connect(connectionString, {
    useNewUrlParser: true
})

connection.on('error', err => {
    console.log("DATABASE ERROR: ", err)
})


connection.once('open', () => {
    console.log("Connected to Database")
})