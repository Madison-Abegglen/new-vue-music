let express = require('express')
let bp = require('body-parser')
require('./dbconfig/db-config')
let port = 3000
let server = express()

server.use(bp.json())
server.use(bp.urlencoded({
    extended: true
}))

let songRoutes = require('./routes/Songs')

server.use('/songs', songRoutes)

server.use('/songs/*', (error, req, res, next) => {
    res.send(error)
})

server.use('*', (req, res, next) => {
    res.status(400).send('<h1>NO PAGE FOUND.</h1>')
})

server.listen(port, () => {
    console.log('SOUNDS......on', port)
})

