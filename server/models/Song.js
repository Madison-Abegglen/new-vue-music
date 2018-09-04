let mongoose = require('mongoose')
let Schema = mongoose.Schema
let schemaName = 'Song'


let schema = new Schema({
    name: {
        type: String,
        required: true
    },
    artistName: {
        type: String,
        required: true
    },
    albumArt: {
        type: String,
        required: true
    },
    album: {
        type: String,
        required: true
    },
    preview: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model(schemaName, schema)